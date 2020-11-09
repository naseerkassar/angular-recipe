import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';

const appRouters: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'shoppingList', component: ShoppingListComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouters)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
