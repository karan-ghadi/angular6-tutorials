import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [];

  constructor() { }

  getIngredient() {
    return this.ingredients.slice();
  }
  getIngredients(index: number) {
    return this.ingredients[index];
  }

  addingredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[] ) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  onUpdateIngredients(index: number, newIngredients: Ingredient) {
    this.ingredients[index] = newIngredients;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  onDeleteIngredients(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
