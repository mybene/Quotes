import { Component, OnInit,Output,EventEmitter, } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

@Output() emitQuote=new EventEmitter<Quote>();
quoteText:string
quotePublisher:string
quoteAuthor:string
quoteDate:Date;
quoteLike:number;
quoteDislike:number;
newQuote:any


submitQuote(){
  this.newQuote=new Quote(this.quotePublisher,this.quoteText,this.quoteAuthor,this.quoteDate,  this.quoteLike,this.quoteDislike);
  this.quoteText=''
  this.quotePublisher=''
  this.quoteAuthor=''
  this.quoteLike=0
  this.quoteDislike=0
  this.emitQuote.emit(this.newQuote);
}
 
  ngOnInit() {
  }

}



