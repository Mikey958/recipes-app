import { Component, input } from '@angular/core';

@Component({
  selector: 'app-recipe-banner',
  imports: [],
  templateUrl: './recipe-banner.component.html',
  styleUrl: './recipe-banner.component.scss',
})
export class RecipeBannerComponent {
  public recipeTags = input.required<string[]>();
  public recipeName = input.required<string>();
}
