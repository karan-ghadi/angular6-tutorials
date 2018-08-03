import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipes } from '../recipes/recipe.model';
import { map, subscribeOn } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})

export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://ngrecipebook-25f52.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipe());
  }

  fetchRecipes() {
    const token = this.authService.getToken();
    this.http.get('https://ngrecipebook-25f52.firebaseio.com/recipes.json?auth=' + token)
    .pipe(
      map((response: Response) => {
        const recipes: Recipes[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
    ).subscribe(
      (recipe: Recipes[]) => {
        this.recipeService.setRecipes(recipe);
      }
    );
  };
}
