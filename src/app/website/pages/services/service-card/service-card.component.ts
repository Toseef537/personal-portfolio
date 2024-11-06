import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { IService } from '../../../../common/interfaces/website.interface';
import { services } from '../../../../../data';

@Component({
  selector: 'service-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  cardIdentity: string = 'Depth';
  services: IService[] = services;

  constructor() { }

  focus(i: any) {
    this.cardIdentity = i;
  }
}
