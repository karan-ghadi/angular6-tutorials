import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipes;
  @Input() index: number;
  constructor(private recipeSer: RecipeService) { }

  ngOnInit() {
  }
}
