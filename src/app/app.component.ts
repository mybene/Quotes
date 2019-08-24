import { Component } from '@angular/core';
import { Quote } from './quote';
// import { QuoteComponent } from './quote/quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  // quotes:string[];
  quotes:Quote[] =[
    new Quote(1,'Together,we can','Martin R.K','Black Oboma'),
    new Quote(2,'Better to bron poor than to die poorer','Sagesse togolais','Serge Massanvi'),
    new Quote(3,'Success comes with pratices','Maweden','JP Kayobotsi'),
  ];

  // constructor (){
  //   this.quotes=['Better to bron poor than to die poorer','Time wasted do not come back','Love does not cost anything'];
  // }
}
