import { Component } from '@angular/core';
import { educationDetails, experienceDetails } from '../../../../../../data';
import { IEducationDetail } from '../../../../../common/interfaces/website.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  //  Years 
  timelineYears = [
    'May 2022 - Present',
    'Jan 2022 - Apr 2022'
  ];


  // Education Details 
  experienceDetails: IEducationDetail[] = experienceDetails;
}
