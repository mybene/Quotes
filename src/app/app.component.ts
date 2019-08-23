import { Component } from '@angular/core';
import { Quote } from '@angular/compiler';
import { QuoteComponent } from './quote/quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  // quotes:string[];
  quotes:Quote[]=[];

  constructor (){
    this.quotes=[];
  }
}
