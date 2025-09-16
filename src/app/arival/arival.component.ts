import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-arival',
  standalone: true,
  imports: [CommonModule,FooterComponent,NavbarComponent],
  templateUrl: './arival.component.html',
  styleUrls: ['./arival.component.css']
})
export class ArivalComponent {

  @ViewChild('cartIcon', { static: true }) cartIcon!: ElementRef;

  cartCount = 0;

  items = [
    { name: 'BLACK MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/23-06-Hawaa3037_de3b2eea-c20c-4dca-bbba-765448f80a9c.jpg?v=1752773003&width=300' },
    { name: 'THYME MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/Brown_1595.jpg?v=1746011555&width=300' },
    { name: 'NAVY MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/571A9114_942e4f00-5b15-4d68-8bee-9e0ffd7c1cc7.jpg?v=1751042370&width=300' },
    { name: 'SMOKE MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/23-06-Hawaa2927_5557a260-f68d-42d7-99d8-8f3311fba37a.jpg?v=1752772997&width=300' },
    { name: 'BROWN MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/571A9042_fe4f4d83-1922-4888-b707-98b8a334d20b.jpg?v=1746011493&width=300' },




     { name: 'BLACK MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/Forrest_1686_5b13abaf-3947-4766-a59a-b2421fc7c049.jpg?v=1746011692&width=500' },
    { name: 'THYME MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/Ruby_1739.jpg?v=1746011618&width=500' },
    { name: 'NAVY MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/Emerald_1974.jpg?v=1746011582&width=500' },
    { name: 'SMOKE MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/Lait_1634_0a6e841c-14cf-40db-97dc-48762bd17707.jpg?v=1746011527&width=500' },
    { name: 'BROWN MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/23-06-Hawaa2839_67e232e8-663d-464f-8e98-8c9a07618954.jpg?v=1752773239&width=500' },





     { name: 'BLACK MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/23-06-Hawaa2962_f1842d5f-7a83-4701-82cd-8988efe4d3ec.jpg?v=1752828482&width=500' },
    { name: 'THYME MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/23-06-Hawaa2744_87a537b7-7927-4c50-b37a-19fcc9e88e89.jpg?v=1752773192&width=500' },
    { name: 'NAVY MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/russet_1789_665ee51b-9a9e-4270-9cda-4e589ffdf9ba.jpg?v=1746011664&width=500' },
    { name: 'SMOKE MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/Ecru_1709_e6b3561a-b708-446c-bc47-b9b59b636a78.jpg?v=1746011674&width=500' },
    { name: 'BROWN MODAL HIJAB', price: 'FROM $14.00', image: 'https://us.hawaaclothing.com/cdn/shop/files/Ecru_1701.jpg?v=1746011636&width=500' }
  ];

  addToCart(productImg: HTMLImageElement, index: number) {
    const cart = this.cartIcon.nativeElement as HTMLElement;
    const imgClone = productImg.cloneNode(true) as HTMLImageElement;

    const rect = productImg.getBoundingClientRect();
    imgClone.classList.add('clone-img');
    imgClone.style.left = rect.left + 'px';
    imgClone.style.top = rect.top + 'px';
    document.body.appendChild(imgClone);

    const cartRect = cart.getBoundingClientRect();
    setTimeout(() => {
      imgClone.style.left = cartRect.left + 'px';
      imgClone.style.top = cartRect.top + 'px';
      imgClone.style.opacity = '0.5';
      imgClone.style.transform = 'scale(0.2)';
    }, 10);

    setTimeout(() => {
      imgClone.remove();
      this.cartCount++;
    }, 800);
  }

   menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

