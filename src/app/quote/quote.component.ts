import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";


@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"],
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Together,we can', 'Martin R.K', 'Black Obama ', new Date(2019, 3, 14), 0, 0),
    // new Quote('To die poorer is a choice ','Sagesse togolais','Serge Massanvi',new Date(2020,10,14),0,0),
    // new Quote('Success is a pratice','Maweden','JP Kayobotsi',new Date(2014,6,08),0,0),
  ];

  preNumber: number;
  lastNumber: number;
  counter: number;

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(data) {
    console.log(data);
    this.quotes.push(data);
  }


  upvote(index) {
    this.quotes[index].upvotes++;
  }

  downvote(index) {
    this.quotes[index].downvotes++;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        'Are you sure you want to delete ${this.quotes[index].text}'
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  highestUpvote() {
    this.preNumber = 0
    this.lastNumber = 0;

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNumber = this.quotes[this.counter].upvotes;
      if (this.lastNumber > this.lastNumber) { this.preNumber = this.lastNumber }

    }
    return this.preNumber;

  }
  constructor() { }

  ngOnInit() { }
}
