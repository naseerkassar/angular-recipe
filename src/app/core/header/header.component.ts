import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../recipes/recipe.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService, public authService: AuthService ) { }

  ngOnInit() {
    this.recipeService.getInitialData();
  }
  onSave() {
    this.recipeService.pushInitialData();
  }
  onFetch() {
    this.recipeService.getInitialData();
  }
  onLogOut() {
    this.authService.logOut();
    this.authService.navigateAwayFromRecipes();
  }
}
