import { Component,OnInit } from "@angular/core";
import { Quote } from "../quote";


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

  // no needm to hide the details
  // toggleDetails(index){
  //   this.quotes[index].showDescription =!this.quotes[index].showDescription;
  // }
  
  
  upvote(index){
    this.quotes[index].upvotes++;
  }

  downvote(index){
    this.quotes[index].downvotes++;
  }
  completeQuote(isComplete,index){
    if(isComplete){
      this.quotes.splice(index,1);
    }
  }

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm(
        Are you sure you want to delete ${this.quotes[index].text}
      );
      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(Quote.completeDate);
    this.quotes.push(quote);
  }
  
  constructor() {}

  ngOnInit() {}
}
