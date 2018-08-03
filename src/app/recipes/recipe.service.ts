import { Injectable } from '@angular/core';
import { Recipes } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipes[]>();
  private recipes: Recipes[] = [
    new Recipes(
      'Instant Pot Soy Sauce Chicken Bowls',
      'Instant Pot Soy Sauce Chicken is a quick short-cut version of a classic recipe. It comes together in about 30 minutes, and can be shredded and served over rice with your favorite veggie side!',
      './assets/images/recipes/breakfast-2151201_1920.jpg',
      [
        new Ingredient('teaspoons oil', 2),
        new Ingredient('slices ginger', 7),
        new Ingredient('scallions, cut into 3-inch pieces', 2),
        new Ingredient('whole star anise', 3),
        new Ingredient('sugar Cup, plus 2 tablespoons', 1),
        new Ingredient('teaspoons salt', 2),
        new Ingredient('cups water', 8),
        new Ingredient('boneless skinless chicken thighs', 8),
      ]),
    new Recipes(
      'Ginger Scallion Hokkien Noodles',
      'Hokkien noodles come from Fujian China and these Ginger Scallion Hokkien Noodles are a 10-ingredient delicious wonder that takes just 20 minutes to prepare!',
      './assets/images/recipes/food-3270461_1920.jpg',
      [
        new Ingredient('boneless skinless chicken thighs, cut into pieces', 8),
        new Ingredient('teaspoon cornstarch', 1),
        new Ingredient('Vegetable oil', 1),
        new Ingredient('teaspoon soy sauce, plus 1½ tablespoons (divided)', 1),
        new Ingredient('slices ginger', 6),
        new Ingredient('scallions, julienned', 8),
        new Ingredient('red chili, sliced (optional)', 1),
      ]),
    new Recipes(
      '20 Minute Congee with Pork and Egg',
      'Now you can make delicious congee with slow-cooked flavor from scratch in 20 min? This exciting technique cuts the usual congee cooking time in half or more!',
      './assets/images/recipes/food-3048440_1920.jpg',
      [
        new Ingredient('Vegetable oil', 1),
        new Ingredient('teaspoon oyster sauce', 1),
        new Ingredient('cups water or chicken broth', 7),
        new Ingredient('thousand year-old eggs', 2),
        new Ingredient('slices ginger', 3),
        new Ingredient('ounces pork shoulder, julienned', 4),
      ]),
  ];

  // recipeSelected = new EventEmitter<Recipes>();
  constructor(private shoppinglistSer: ShoppingService) { }

  setRecipes(recipe: Recipes[]) {
    this.recipes = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientstoShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistSer.addIngredients(ingredients);
  }

  getRecipes(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipes) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipes) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
