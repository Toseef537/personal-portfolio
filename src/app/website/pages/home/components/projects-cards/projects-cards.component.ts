import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RouterLink } from '@angular/router';
import { projects } from '../../../../../../data';
import { IProject } from '../../../../../common/interfaces/website.interface';

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
  projects: IProject[] = projects;
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
