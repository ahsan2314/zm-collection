import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

   loading = false;

  constructor(private router: Router) {}

  navigateWithLoader(route: string) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.router.navigate([route]);
    }, 2000); // 3 seconds
  }
}
