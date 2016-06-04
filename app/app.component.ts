import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';


// //CHILD ANNOTATION FOR CREATING A LIST OF MEALS
// @Component({
//   selector: 'meal-list',
//   inputs: ['mealList'],
//   outputs: ['onMealSelect'],
//   directives: [MealComponent],
//   template: `
//   <h3 *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)"
//   [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal">
//   </h3>
//   `
// })
// export class MealListComponent {
//   public mealList: Meal[];
//   public onMealSelect: EventEmitter<Meal>;
//   public selectedMeal: Meal;
//   constructor() {
//     this.onMealSelect = new EventEmitter();
//   }
//   mealClicked(clickedMeal: Meal): void {
//     console.log('child', clickedMeal);
//     this.selectedMeal = (clickedMeal);
//     this.onMealSelect.emit(clickedMeal);
//   }
// }

//MAIN PARENT ANNOTATION


@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("first meal", "It was ok", 0),
      new Meal("second meal", "It was meh", 1),
      new Meal("third meal", "Ew", 2),
      new Meal("fourth meal", "Ate at iHop", 3)
    ];
  }
}
  // mealWasSelected(clickedMeal: Meal): void {
  //   console.log('parent', clickedMeal);
  // }

//
// export class Meal {
//   public done: boolean = false;
//   constructor(public description: string, public id: number) {
//
//   }
// }
