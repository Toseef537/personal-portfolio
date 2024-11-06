import { Component } from '@angular/core';
import { educationDetails } from '../../../../../../data';
import { IEducationDetail } from '../../../../../common/interfaces/website.interface';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  //  Years 
  timelineYears = [
    '2017 - 2021',
    '2015 - 2017'
  ];

  //  Education Details 
  educationDetails:IEducationDetail[] = educationDetails;
}
