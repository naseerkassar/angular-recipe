import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('projectForm') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode =  false;
  ingredientId: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientEdited.subscribe((index: number) => {
      this.editMode = true;
      this.ingredientId = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount

      });
    });
  }

  onIngredientSubmitted(form: NgForm) {
    const addedIngredients = form.value;
    const newIngredient = new Ingredient(addedIngredients.name, addedIngredients.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient( this.ingredientId, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.shoppingListForm.onReset();
  }
  onClear() {
    this.shoppingListForm.onReset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingListService.deleteItem(this.ingredientId);
    this.shoppingListForm.onReset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
