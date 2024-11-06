import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';
import { PrimaryButtonComponent } from '../../../common/components/primary-button/primary-button.component';
import { navigationItems } from '../../../../data';
import { INavigation } from '../../../common/interfaces/website.interface';

@Component({
  selector: 'website-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, MobileNavigationComponent, PrimaryButtonComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isMenuOpen: boolean = false;
  navigation: INavigation[] = navigationItems;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
