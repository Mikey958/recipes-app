import {
  type AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  type ElementRef,
  HostListener,
  ViewChild,
  inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { filter, interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface RecipeCard {
  id: string;
  title: string;
}

interface CarouselSlide extends RecipeCard {
  uid: string;
  isClone: boolean;
}

@Component({
  selector: 'app-main-popular-recipes',
  standalone: true,
  templateUrl: './main-popular-recipes.component.html',
  styleUrl: './main-popular-recipes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPopularRecipesComponent implements AfterViewInit {
  @ViewChild('viewport', { static: true })
  private viewportRef!: ElementRef<HTMLElement>;

  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly document = inject(DOCUMENT);

  private readonly sideCardWidthRatio = 0.515;
  private readonly activeCardWidthRatio = 0.607;
  private readonly gapPx = 20;
  private readonly autoplayDelayMs = 3000;

  private resizeObserver?: ResizeObserver;

  protected viewportWidth = 0;

  protected readonly recipes: RecipeCard[] = [
    { id: '1', title: 'Рецепт 1' },
    { id: '2', title: 'Рецепт 2' },
    { id: '3', title: 'Рецепт 3' },
    { id: '4', title: 'Рецепт 4' },
    { id: '5', title: 'Рецепт 5' },
  ];

  private readonly cloneCount = Math.min(2, this.recipes.length);

  protected readonly slides: CarouselSlide[] = this.createSlides(this.recipes);

  protected currentIndex = this.recipes.length > 1 ? this.cloneCount : 0;
  protected isSnapping = false;

  protected get trackTransform(): string {
    const offset = this.getOffsetPx(this.currentIndex);

    return `translate3d(-${String(offset)}px, 0, 0)`;
  }

  protected get activeDotIndex(): number {
    return (this.currentIndex - this.cloneCount + this.recipes.length) % this.recipes.length;
  }

  constructor() {
    if (this.recipes.length <= 1) {
      return;
    }

    interval(this.autoplayDelayMs)
      .pipe(
        filter(() => !this.document.hidden),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.next();
      });
  }

  public ngAfterViewInit(): void {
    this.updateViewportWidth();

    this.resizeObserver = new ResizeObserver(() => {
      this.updateViewportWidth();
    });

    this.resizeObserver.observe(this.viewportRef.nativeElement);

    this.destroyRef.onDestroy(() => {
      this.resizeObserver?.disconnect();
    });
  }

  @HostListener('document:visibilitychange')
  protected onVisibilityChange(): void {
    if (!this.document.hidden) {
      this.normalizePosition();
    }
  }

  protected onTransitionEnd(event: TransitionEvent): void {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') {
      return;
    }

    this.normalizePosition();
  }

  private next(): void {
    if (this.normalizePosition()) {
      return;
    }

    this.currentIndex += 1;
    this.cdr.markForCheck();
  }

  private normalizePosition(): boolean {
    const firstAfterCloneIndex = this.recipes.length + this.cloneCount;

    if (this.currentIndex < firstAfterCloneIndex) {
      return false;
    }

    this.snapToStart();

    return true;
  }

  private snapToStart(): void {
    this.isSnapping = true;
    this.currentIndex = this.cloneCount;

    this.cdr.detectChanges();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.isSnapping = false;
        this.cdr.markForCheck();
      });
    });
  }

  private getOffsetPx(index: number): number {
    const sideCardWidth = this.viewportWidth * this.sideCardWidthRatio;
    const activeCardWidth = this.viewportWidth * this.activeCardWidthRatio;

    return index * (sideCardWidth + this.gapPx) + activeCardWidth / 2 - this.viewportWidth / 2;
  }

  private updateViewportWidth(): void {
    const width = this.viewportRef.nativeElement.clientWidth;

    if (width === this.viewportWidth) {
      return;
    }

    this.viewportWidth = width;
    this.cdr.detectChanges();
  }

  private createSlides(cards: RecipeCard[]): CarouselSlide[] {
    const realCards = cards.map((card) => ({
      ...card,
      uid: `real-${card.id}`,
      isClone: false,
    }));

    if (cards.length <= 1) {
      return realCards;
    }

    const beforeClones = cards.slice(-this.cloneCount).map((card) => ({
      ...card,
      uid: `clone-before-${card.id}`,
      isClone: true,
    }));

    const afterClones = cards.slice(0, this.cloneCount).map((card) => ({
      ...card,
      uid: `clone-after-${card.id}`,
      isClone: true,
    }));

    return [...beforeClones, ...realCards, ...afterClones];
  }
}
