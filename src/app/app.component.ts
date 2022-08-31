import { Component } from '@angular/core';
import { sentence } from 'txtgen';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText=sentence()
  enterdText=''
  
  onInput(value:string){
    this.enterdText=value
  }

  Compare(randomLetter:string,enterdLetter:string)
  {
    if(!enterdLetter)
    {
      return 'pending';
    }
     return randomLetter===enterdLetter ? 'correct' :'incorrect';
  }
}
