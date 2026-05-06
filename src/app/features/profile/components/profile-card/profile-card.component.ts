import { Component } from '@angular/core';
import { pluralizeRu } from '@/shared/helpers';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  count = 0;

  protected pluralizeRecipesRow = pluralizeRu(this.count, ['рецепт', 'рецепта', 'рецептов']);
  protected pluralizeSubscribersRow = pluralizeRu(this.count, [
    'подписчик',
    'подписчика',
    'подписчиков',
  ]);
}
