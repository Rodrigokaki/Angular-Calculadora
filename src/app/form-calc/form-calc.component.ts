import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  answer: number = 0;

  calc(operation: string) {
    switch(operation){
      case '+':
        this.answer = this.num1 + this.num2; break;
      case '-':
        this.answer = this.num1 - this.num2; break;
      case '*':
        this.answer = this.num1 * this.num2; break;
      case '/':
        this.answer = this.num1 / this.num2; break;
      case '^':
        this.answer = this.num1 ** this.num2; break;
      case 'bin':
        this.answer = +(this.num1.toString(2));
    }

    return this.answer;
  }
}
