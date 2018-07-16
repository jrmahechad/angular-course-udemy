import { Injectable } from '../../../node_modules/@angular/core';
import { Http, Response } from '../../../node_modules/@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {

  }

  storeRecipes() {
    return this.http.put('https://angular-course-udemy.firebaseio.com/project/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://angular-course-udemy.firebaseio.com/project/recipes.json')
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }

}
