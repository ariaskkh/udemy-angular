import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail';
import { RecipeItemComponent } from './pages/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './pages/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingEditComponent } from './pages/shopping-list/shopping-list-edit/shopping-edit';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
