import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss',
})
export class ProfileNavigationComponent {}
