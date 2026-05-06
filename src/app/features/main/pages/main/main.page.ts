import { Component } from '@angular/core';
import { MainBannerComponent, MainPopularRecipesComponent } from '../../components';

@Component({
  selector: 'app-main-page',
  imports: [MainBannerComponent, MainPopularRecipesComponent],
  templateUrl: './main.page.html',
  styleUrl: './main.page.scss',
})
export class MainPage {}
