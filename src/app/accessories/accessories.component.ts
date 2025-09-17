import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-accessories',
  imports: [CommonModule,RouterModule,NavbarComponent,FooterComponent],
  standalone:true,
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class ACCESSORIESComponent {

}
