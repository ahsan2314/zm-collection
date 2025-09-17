import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HijabCollectionComponent } from '../hijab-collection/hijab-collection.component';
import { FooterComponent } from '../footer/footer.component';
import { AbayaCollectionComponent } from '../abaya-collection/abaya-collection.component';
import { EidCollectionComponent } from '../eid-collection/eid-collection.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-zm-collection-home',
  standalone: true,
  templateUrl: './zm-collection-home.component.html',
  styleUrls: ['./zm-collection-home.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    HijabCollectionComponent,
    FooterComponent,
    AbayaCollectionComponent,
    EidCollectionComponent,
    NgFor,
    NavbarComponent
  ],
})
export class ZmCollectionHomeComponent implements OnInit {
  slides = [
    {
      image: 'https://us.hawaaclothing.com/cdn/shop/files/HAWAA_2013.jpg?v=1756822870&width=1400',
      text: 'Luxury Hijab Collection',
      para: 'Discover elegance and comfort in our premium hijabs.',
      button: 'Shop NOW',
    },
    {
      image: 'https://us.hawaaclothing.com/cdn/shop/files/HAWAA_418.jpg?v=1756822975&width=1400',
      text: 'Modern Abayas',
      para: 'Redefine modest fashion with our latest arrivals.',
      button: 'Shop NOW',
    },
    {
      image: 'https://us.hawaaclothing.com/cdn/shop/files/23-06-Hawaa1303_e0e4f9ac-ce92-46d0-a622-f2c7a4a8d0ed.jpg?v=1752828425&width=1400',
      text: 'Eid Collection 2025',
      para: 'Celebrate with style and grace this festive season.',
      button: 'Shop NOW',
    },
    {
      image: 'https://us.hawaaclothing.com/cdn/shop/files/23-06-Hawaa1972_d10cba31-c92e-4916-8b67-1f43f725661d.jpg?v=1752773022&width=1400',
      text: 'Summer Collectoin',
      para: 'Celebrate with style and grace this festive season.',
      button: 'Shop NOW',
    },
  ];

  currentSlide: number = 0;
  previousSlide: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // 3 second ka interval
  }

  nextSlide(): void {
    if (this.slides.length > 0) {
      this.previousSlide = this.currentSlide;
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }
  }

  prevSlide(): void {
    if (this.slides.length > 0) {
      this.previousSlide = this.currentSlide;
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    }
  }

    menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
