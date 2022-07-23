import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamapp';
  numberMin: number = 0;
  numberMax: number = 0;
  trueValue: number = 0;
  onInputMin(min: string){
    this.numberMin = Number(min);
  }
  onInputMax(max: string){
    this.numberMax = Number(max);
  }
  onSubmitBtn(){
    this.trueValue = Math.floor(Math.random() * (this.numberMax - this.numberMin) + this.numberMin);
  }
}
