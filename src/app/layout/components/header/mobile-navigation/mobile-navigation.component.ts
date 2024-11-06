import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavigation } from '../../../../common/interfaces/website.interface';
import { navigationItems } from '../../../../../data';
@Component({
  selector: 'mobile-navigation',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink,RouterLinkActive],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MobileNavigationComponent {
  @Input() isMenuOpen: boolean = false;
  @Input() navigation: any[] = [];
  @Output() menuToggle: EventEmitter<void> = new EventEmitter();

  toggleMenu() {
    this.menuToggle.emit();
  }
}
