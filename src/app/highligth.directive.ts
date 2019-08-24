import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective {

  constructor(private elem:ElementRef) {}

    @HostListener("click")onClick(){
      this.textDeco("aqua")
    }
    
    @HostListener("dblclick") onDoubleClick(){
      this.textDeco("black")
    }
    private textDeco(action:string){
    this.elem.nativeElement.style.background=action;
    }
  }


