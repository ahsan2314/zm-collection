import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  private backToTop!: HTMLElement;
  private lastScrollY = 0;
  private ticking = false;
currentYear: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Back to top button reference
    this.backToTop = this.el.nativeElement.querySelector('#backToTop');

    if (this.backToTop) {
      this.backToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Lazy loading
    if ('IntersectionObserver' in window) {
      const lazyElements = this.el.nativeElement.querySelectorAll('.lazy');

      const lazyObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyElement = entry.target as HTMLElement;
            // Example: agar <img data-src=""> ho to replace kar do
            if (lazyElement.hasAttribute('data-src')) {
              (lazyElement as HTMLImageElement).src =
                lazyElement.getAttribute('data-src') || '';
            }
            observer.unobserve(lazyElement);
          }
        });
      });

      lazyElements.forEach((lazyElement: Element) => {
        lazyObserver.observe(lazyElement);
      });
    }
  }

  // Scroll listener (Angular way)
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY || window.pageYOffset;

    if (this.backToTop) {
      if (scrollY > 300) {
        this.backToTop.classList.add('visible');
      } else {
        this.backToTop.classList.remove('visible');
      }
    }

    // Optimized animations
    this.lastScrollY = scrollY;
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        // extra animations yahan daal sakte ho
        this.ticking = false;
      });
      this.ticking = true;
    }
  }
}
