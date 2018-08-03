import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RecipeService } from './recipes/recipe.service';
import { ShoppingService } from './shopping/shopping.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGaurd } from './auth/auth-gaurd.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firabase),
    AngularFireAuthModule,
    RecipesModule,
    ShoppingModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    RecipeService,
    ShoppingService,
    DataStorageService,
    AuthService,
    AuthGaurd
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
