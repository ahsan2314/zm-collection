import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hijab-collection',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hijab-collection.component.html',
  styleUrls: ['./hijab-collection.component.css']
})
export class HijabCollectionComponent implements AfterViewInit {

  private slider!: HTMLElement;
  private prevBtn!: HTMLButtonElement;
  private nextBtn!: HTMLButtonElement;

  private index = 0;
  private visibleSlides = 3;
  private totalSlides = 0;

  ngAfterViewInit(): void {
    this.slider = document.getElementById("slider") as HTMLElement;
    this.prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
    this.nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;

    this.totalSlides = this.slider.children.length;

    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    // Auto-play
    setInterval(() => this.autoPlay(), 4000);

    // Init
    this.updateSlider();
  }

  private getVisibleSlides(): number {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  }

  private updateSlider(): void {
    this.visibleSlides = this.getVisibleSlides();
    const slideWidth = (this.slider.children[0] as HTMLElement).getBoundingClientRect().width + 20; // +20 for margin
    this.slider.style.transform = `translateX(-${this.index * slideWidth}px)`;
  }

  private nextSlide(): void {
    if (this.index < this.totalSlides - this.visibleSlides) {
      this.index++;
      this.updateSlider();
    }
  }

  private prevSlide(): void {
    if (this.index > 0) {
      this.index--;
      this.updateSlider();
    }
  }

  private autoPlay(): void {
    if (this.index < this.totalSlides - this.visibleSlides) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.updateSlider();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSlider();
  }
}
