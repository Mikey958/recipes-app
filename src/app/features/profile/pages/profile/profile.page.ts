import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { ProfileNavigationComponent } from '../../components/profile-navigation/profile-navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileCardComponent, ProfileNavigationComponent, RouterOutlet],
  templateUrl: './profile.page.html',
  styleUrl: './profile.page.scss',
})
export class ProfilePage {}
