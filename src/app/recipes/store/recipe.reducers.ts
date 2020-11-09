import {Recipe} from '../recipe.model';
import * as FromRecipesActions from './recipe.actions';
import {Ingredient} from '../../shared/ingredient.model';

export interface RecipeFeatureState {
  recipes: State;
}
export interface State {
  recipes: Recipe [];
}

const initialState: State = {
  recipes: [
    new Recipe (
      'test Recipe1',
      'this is only test description',
      'https://vilascounty.uwex.edu/files/2013/12/Recipes-Title.png',
      [
        new Ingredient('Meat', 2),
        new Ingredient('tomato', 5)
      ]
    ),
    new Recipe (
      'test Recipe2',
      'this is only test description',
      'https://vilascounty.uwex.edu/files/2013/12/Recipes-Title.png',
      [
        new Ingredient('tomato', 5),
        new Ingredient('eggs', 5)
      ]
    ),
    new Recipe (
      'test Recipe3',
      'this is only test description',
      'https://vilascounty.uwex.edu/files/2013/12/Recipes-Title.png',
      [
        new Ingredient('Meat', 2),
        new Ingredient('eggs', 5)
      ]
    )

  ]

};


export function RecipeReducers(state = initialState, action: FromRecipesActions.RecipesActions) {
  switch (action.type) {
    case (FromRecipesActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (FromRecipesActions.ADD_RECIPES) :
      return {
        ...state, recipes: [...state.recipes, action.payload]
    };
    case (FromRecipesActions.UPDATE_RECIPES) :
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.newRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes
      };
    case (FromRecipesActions.DELETE_RECIPES):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }

}

