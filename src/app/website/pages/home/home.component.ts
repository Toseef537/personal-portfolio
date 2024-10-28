import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesCardsComponent } from './components/services-cards/services-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage,ServicesCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
