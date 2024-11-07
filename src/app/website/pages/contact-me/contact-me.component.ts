import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../../common/components/hero-section/hero-section.component';

@Component({
  selector: 'contact-me',
  standalone: true,
  imports: [RouterLink,HeroSectionComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  contactForm(){
    console.log('Form value is submitted');
    
  }
}
