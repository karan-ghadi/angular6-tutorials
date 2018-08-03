import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredients.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editmode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor( private shopListSer: ShoppingService ) { }

  ngOnInit() {
    this.subscription = this.shopListSer.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editmode = true;
        this.editedItem = this.shopListSer.getIngredients(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editmode) {
      this.shopListSer.onUpdateIngredients(this.editedItemIndex, newIngredient);
      this.editmode = false;
      form.reset();
    }else{
      this.shopListSer.addingredient(newIngredient);
      this.editmode = false;
      form.reset();
    }
  }

  onClear() {
    this.slForm.reset();
    this.editmode = false;
  }
  onDelete() {
    this.shopListSer.onDeleteIngredients(this.editedItemIndex);
    this.onClear();
  }
}
