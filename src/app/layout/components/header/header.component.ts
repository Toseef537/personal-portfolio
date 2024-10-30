import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';

@Component({
  selector: 'website-header',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink,MobileNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
