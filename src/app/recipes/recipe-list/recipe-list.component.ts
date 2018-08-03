import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipes } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Route } from '@angular/compiler/src/core';
import { Subscription } from '../../../../node_modules/rxjs';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipes[];
  subscribtion: Subscription;
  constructor(
    private recipeser: RecipeService,
    private routes: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) { }

  fetchRecipe() {
    this.dataStorageService.fetchRecipes();
  }

  ngOnInit() {
    this.subscribtion = this.recipeser.recipeChanged.subscribe(
      (recipe: Recipes[]) => {
        this.recipes = recipe;
      }
    );
    this.recipes = this.recipeser.getRecipe();
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  addNewRecipe() {
    this.routes.navigate(['new'], {relativeTo: this.route});
  }
}
