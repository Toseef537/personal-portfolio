import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'project-cards',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule, NgOptimizedImage,RouterLink],
  templateUrl: './projects-cards.component.html',
  styleUrl: './projects-cards.component.scss',
  encapsulation: ViewEncapsulation.Emulated 
})
export class ProjectsCardsComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  projects: any[] = [
    {
      link:'/project-detail',
      url: 'images/project-images/ssbci.png',
      title: 'Banking Loan Website',
      desc: 'A dynamic banking loan application platform with role-based dashboards, built in Angular for seamless loan management and processing.'
    },
    {
      link:'/project-detail',
      url: 'images/project-images/number-plate-project.png',
      title: 'Online Vehicle Number Plates Cutomization Website',
      desc: 'An interactive platform for designing and ordering custom vehicle number plates online, with options for personalized styles, colors, and sizes.'
    }
  ]
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
}
