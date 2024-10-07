import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CategoryBarComponent } from "../category-bar/category-bar.component";
import { CoursesComponent } from "../courses/courses.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, NavBarComponent, CategoryBarComponent, CoursesComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
