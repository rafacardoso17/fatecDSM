import { Component } from '@angular/core';
import { title } from 'process';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent {

  categories: Category[] = [
    {id: 1, title: 'House', image: "../../pet-house.png"},
    {id: 2, title: 'Dog', image: "../../dog.png"},
    {id: 3, title: 'Food', image: "../../pet-food.png"},
    {id: 4, title: 'Veterinary', image: "../../x-ray.png"},
    {id: 5, title: 'Poop', image: "../../poop.png"},
  ]

}
