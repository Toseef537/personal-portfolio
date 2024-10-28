import { Component, OnInit } from '@angular/core';
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
  styleUrl: './projects-cards.component.scss'
})
export class ProjectsCardsComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  projects: any[] = [
    {
      link:'/project-detail',
      url: 'images/project-images/ssbci.png',
      title: 'Banking Loan Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptas vitae itaque at labore laborum eveniet porro deleniti, quaerat adipisci quibusdam, veniam quae voluptatem alias cum? Consecteturexercitationem voluptatem sapiente alias?'
    },
    {
      link:'/project-detail',
      url: 'images/project-images/number-plate-project.png',
      title: 'Online Vehicle Number Plates Cutomization Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptas vitae itaque at labore laborum eveniet porro deleniti, quaerat adipisci quibusdam, veniam quae voluptatem alias cum? Consecteturexercitationem voluptatem sapiente alias?'
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
