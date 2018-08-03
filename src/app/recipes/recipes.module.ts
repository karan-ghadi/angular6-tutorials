import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesRouterModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRouterModule,
    SharedModule
  ]
})

export class RecipesModule {}
