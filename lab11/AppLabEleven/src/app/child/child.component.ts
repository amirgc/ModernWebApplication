import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input("seedValue") seedValue: number;
  @Output() newValue = new EventEmitter<number>();
  constructor() {
    console.log(this.seedValue);
  }
  changeValue(i: number) {
    this.seedValue += i;
    this.newValue.emit(this.seedValue);
  }
  ngOnInit() {}
}
