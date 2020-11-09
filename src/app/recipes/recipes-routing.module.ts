import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './recipes.component';
import {StartRecipeComponent} from './start-recipe/start-recipe.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuard} from '../auth/auth-guard-service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {CommonModule} from '@angular/common';

const recipesRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
      {path: '', component: StartRecipeComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipeDetailComponent}
    ]},

  ];
@NgModule ({
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class RecipesRoutingModule { }
