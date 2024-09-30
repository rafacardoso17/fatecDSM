import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../models/courses';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: Course[] = [
    {id: 1, idCategory:'A', title: 'T', description:'loren', cost: 0, image: '', duration: ''},
    {id: 1, idCategory:'A', title: 'T', description:'loren', cost: 0, image: '', duration: ''},
    {id: 1, idCategory:'A', title: 'T', description:'loren', cost: 0, image: '', duration: ''},
    {id: 1, idCategory:'A', title: 'T', description:'loren', cost: 0, image: '', duration: ''},
    {id: 1, idCategory:'A', title: 'T', description:'loren', cost: 0, image: '', duration: ''}

  ]
}
