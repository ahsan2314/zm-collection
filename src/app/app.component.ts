import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZmCollectionHomeComponent } from './zm-collection-home/zm-collection-home.component';

@Component({
  selector: 'app-root',
  standalone: true,              // ✅ Standalone component ke liye zaroori
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   // ✅ correct spelling, array
})
export class AppComponent {
  title = 'zm-collection';
}
