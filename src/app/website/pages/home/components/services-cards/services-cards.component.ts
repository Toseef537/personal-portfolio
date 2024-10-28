import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
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
  services: any[] = [
    {
      icon: 'development.png',
      title: 'Front-End Development',
      skills: ['HTML/CSS', 'JavaScript', 'Angular', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: 'backend.png',
      title: 'Backend Development',
      skills: ['Nodejs', 'Express', 'Mongodb', 'TypeScript','Mongoose']
    },
    {
      icon: 'designer.png',
      title: 'Web Designing',
      skills: ['CSS', 'Tailwind CSS', 'Bootstrap', 'Angular Material', 'PrimeNG']
    },
    {
      icon: 'development.png',
      title: 'Front-End Development',
      skills: ['HTML/CSS', 'JavaScript', 'Angular', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: 'backend.png',
      title: 'Backend Development',
      skills: ['Nodejs', 'Express', 'Mongodb', 'TypeScript','Mongoose']
    },
    {
      icon: 'designer.png',
      title: 'Web Designing',
      skills: ['CSS', 'Tailwind CSS', 'Bootstrap', 'Angular Material', 'PrimeNG']
    }
  ];

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
