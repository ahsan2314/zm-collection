import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-abayas',
  standalone: true, // agar standalone component hai
  imports: [CommonModule,RouterModule,NavbarComponent,FooterComponent],
  templateUrl: './abayas.component.html',
  styleUrl: './abayas.component.css'
})
export class AbayasComponent {
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
