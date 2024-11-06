import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../../common/hero-section/hero-section.component';
import { ServiceCardComponent } from './service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeroSectionComponent,ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
