import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesCardsComponent } from './components/services-cards/services-cards.component';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { ProjectsCardsComponent } from './components/projects-cards/projects-cards.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage,ServicesCardsComponent,SliderModule,FormsModule,ProjectsCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
communication:number=75;
leaderShip:number=70;
teamWork:number=90;
flexibility:number=80;

}
