import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AuthGaurd } from '../auth/auth-gaurd.service';

const recipesRoutes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGaurd] },
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGaurd] },
  ]}
];


@NgModule({
  imports: [ RouterModule.forChild(recipesRoutes) ],
  exports: [ RouterModule ]
})
export class RecipesRouterModule {}
