import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { services } from '../../../../../../data';
import { IService } from '../../../../../common/interfaces/website.interface';
@Component({
  selector: 'services-cards',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule, NgOptimizedImage],
  templateUrl: './services-cards.component.html',
  styleUrl: './services-cards.component.scss'
})
export class ServicesCardsComponent {
  responsiveOptions: any[] | undefined;
  cardIdentity: string = 'Depth';
  services: IService[] = services

  constructor() { }

  ngOnInit() {

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  focus(i: any) {
    this.cardIdentity = i;
  }
}
