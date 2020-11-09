import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService,
              private db: AngularFireDatabase,
              private authentication: AngularFireAuth) {
  }

  pushInitialData() {
    this.authentication.auth.onAuthStateChanged((user) => {
      if (user) {
        this.db.database.ref('/recipes').set(this.recipes).catch(error => error);
      } else {
        return null;
      }
    });
  }

  getInitialData() {
    this.authentication.auth.onAuthStateChanged((user) => {
      if (user) {
        this.db.list('/recipes')
          .valueChanges()
          .subscribe(response => {
            this.setRecipes(response);
          });
      } else {
        return this.setRecipes([]);
      }
    });
  }

  getRecipes() {
    return this.recipes.slice();

  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());

  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: any) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

}
