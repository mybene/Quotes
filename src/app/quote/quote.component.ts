import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Together,we can','Martin R.K'),
    new Quote(2,'Better to bron poor than to die poorer','Sagesse togolais'),
    new Quote(3,'Success comes with pratices','Maweden'),
  ];
  constructor() {}

  ngOnInit() {}
}
