import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe',
        'this is a test', 
        'https://www.thespruceeats.com/thmb/JtOA_LnrhrW_TfS3MYCqlPqhUFA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]
        ),
        new Recipe('Another test recipe',
        'this is a test', 
        'https://www.thespruceeats.com/thmb/JtOA_LnrhrW_TfS3MYCqlPqhUFA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg',
        [
          new Ingredient('Meat', 2),
          new Ingredient('Bun', 1)
        ]
        )  
      ];

      constructor(private slService : ShoppingListService){}

      getRecipe() {
        return this.recipes.slice()
      }

      addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}