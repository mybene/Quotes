import { Directive,ElementRef,} from '@angular/core';

@Directive({
  selector:'[appHighligth]'})

export class HighligthDirective {

  constructor(private elem: ElementRef ) {

    this.elem.nativeElement.style.backgroundColor="aqua";
    }
  }

  













