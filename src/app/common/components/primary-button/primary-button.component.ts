import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  #router: Router = inject(Router);
  
  /**
   * Listning Click Event On Host Element
   */
  @HostListener('click') onClick() {
    this.#router.navigateByUrl('/project-detail');
  }
}
