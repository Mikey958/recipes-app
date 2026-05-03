import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@/shared/ui/components';

@Component({
  selector: 'app-main-auth-layout',
  imports: [RouterOutlet, HeaderComponent, HeaderComponent, FooterComponent],
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.scss',
})
export class MainLayout {}
