import { Directive, ElementRef, Input, OnInit, OnChanges } from "@angular/core";

@Directive({
  selector: "[appIsVisible]"
})
export class IsVisibleDirective implements OnChanges {
  @Input("makeVisible") makeVisible: boolean;

  constructor(public el: ElementRef) {}
  ngOnChanges(c) {
    console.log(typeof this.makeVisible);
    if (this.makeVisible) {
      console.log(this.makeVisible);
      this.el.nativeElement.style.display = "block";
    } else {
      console.log(this.makeVisible);
      this.el.nativeElement.style.display = "none";
    }
  }
}
