import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-abaya-collection',
  standalone: true, // agar standalone component hai
  templateUrl: './abaya-collection.component.html',
  styleUrls: ['./abaya-collection.component.css'],
  imports:[RouterModule,CommonModule]
})
export class AbayaCollectionComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const images = this.el.nativeElement.querySelectorAll('img'); // sirf images ko target karein

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'show'); // sirf uss element par class lagao
          obs.unobserve(entry.target); // ek dafa animate ho, phir repeat na ho
        }
      });
    }, { threshold: 0.2 }); // jab 20% visible ho to trigger kare

    images.forEach((img: Element) => observer.observe(img));
  }
}
