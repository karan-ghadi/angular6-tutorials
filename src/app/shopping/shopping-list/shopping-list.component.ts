import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shopListSer: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shopListSer.getIngredient();
    this.subscription = this.shopListSer.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onIngriedientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  onEditItem(index: number) {
    this.shopListSer.startedEditing.next(index);
  }
}
