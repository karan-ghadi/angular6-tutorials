import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipes;
  id: number;

  constructor(private recipeService: RecipeService, private routers: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.routers.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipes(this.id);
      }
    )
  }

  onAddtoShoppingList() {
    this.recipeService.addIngredientstoShoppingList(this.recipe.ingredient);
    this.route.navigate(['/shopping-list'], { relativeTo: this.routers });
  }
  onEditRecipe() {
    this.route.navigate(['edit'], {relativeTo: this.routers});
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.route.navigate(['../'], { relativeTo: this.routers });
  }
}
