import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/shared/ui/components';

@Component({
  selector: 'app-main-auth-layout',
  imports: [RouterOutlet, HeaderComponent, HeaderComponent],
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.scss',
})
export class MainLayout {}
