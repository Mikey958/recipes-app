import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeBannerComponent } from '../../components/recipe-banner/recipe-banner.component';

@Component({
  selector: 'app-recipe',
  imports: [RouterLink, RecipeBannerComponent],
  templateUrl: './recipe.page.html',
  styleUrl: './recipe.page.scss',
})
export class RecipePage {}
