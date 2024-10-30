import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'mobile-navigation',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss'
})
export class MobileNavigationComponent {
  @Input() isMenuOpen: boolean = false;
  @Input() navigation: any[] = [];
  @Output() menuToggle: EventEmitter<void> = new EventEmitter();

  toggleMenu() {
    this.menuToggle.emit();
  }
}
