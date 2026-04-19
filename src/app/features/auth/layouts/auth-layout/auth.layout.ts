import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  templateUrl: './auth.layout.html',
  styleUrl: './auth.layout.scss',
})
export class AuthLayout {
  protected readonly router = inject(Router);

  protected get currentPath(): string {
    const route = this.router.url.split('/').pop() ?? '';

    return ['login', 'register', 'forgot-password'].includes(route) ? route : '';
  }
}
