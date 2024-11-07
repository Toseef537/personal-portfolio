import { Component, inject, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoaderService } from './common/services/loader.service';
import { LoaderComponent } from './common/components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  #loaderService: LoaderService = inject(LoaderService);
  isLoading: any;
  constructor(private router: Router) {
    this.#loaderService.isLoading$.subscribe((res) => {
      this.isLoading = res;
    })
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.#loaderService.show();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.#loaderService.hide();
      }
    });
  }
}
