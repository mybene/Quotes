import { Component,OnInit } from "@angular/core";
import { Quote } from "../quote";
// import { QuoteComponent } from './quote.component';

@Component({
  selector: "app-quote",
  templateUrl:"./quote.component.html",
  styleUrls: ["./quote.component.css"],
})
export class QuoteComponent implements OnInit {
 
  quotes:Quote[] = [ 
    new Quote(1,'Together,we can','Martin R.K','Black Obama ',new Date(2019,3,14)),
    new Quote(2,'To die poorer ','Sagesse togolais','Serge Massanvi',new Date(2015,10,14)),
    new Quote(3,'Success','Maweden','JP Kayobotsi',new Date(2014,6,08)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription =!this.quotes[index].showDescription;
  }
  completeQuote(isComplete,index){
    if(isComplete){
      this.quotes.splice(index,1);
    }
  }
  // upvote(index){
  //   this.quotes[index].upvotes++;
  // }

  // downvote(index){
  //   this.quotes[index].downvotes++;
  // }

  
  constructor() {}

  ngOnInit() {}
}
