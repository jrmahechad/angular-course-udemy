import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'recipe 1',
      'description 1',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('Tommatoes', 5),
        new Ingredient('Cheese', 6),
      ]
    ),
    new Recipe(
      'recipe 2',
      'description 2',
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/skillet-chicken-roasted-potatoes-carrots-ck.jpg?itok=dzdpIO4s',
      [
        new Ingredient('Carrots', 7),
        new Ingredient('Lemmons', 6),
      ]
    ),
    new Recipe(
      'recipe 3',
      'description 3',
      'https://img.taste.com.au/GR-XKpyy/taste/2014/10/australias-most-cooked-pancake-recipe-118377-2.jpg',
      [
        new Ingredient('Honey', 1),
        new Ingredient('Waffles', 5),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }
}
