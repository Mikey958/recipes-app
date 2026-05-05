import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes',
  imports: [RouterLink],
  templateUrl: './recipes.page.html',
  styleUrl: './recipes.page.scss',
})
export class RecipesPage {}
