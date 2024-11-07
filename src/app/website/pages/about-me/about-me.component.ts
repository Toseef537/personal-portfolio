import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../../common/components/hero-section/hero-section.component';
import { PrimaryButtonComponent } from '../../../common/components/primary-button/primary-button.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [HeroSectionComponent,PrimaryButtonComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
