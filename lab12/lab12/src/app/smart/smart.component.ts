import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-smart",
  templateUrl: "./smart.component.html",
  styleUrls: ["./smart.component.css"]
})
export class SmartComponent implements OnInit {
  stringArray: String[];
  constructor() {}

  ngOnInit() {
    this.stringArray = ["test1", "test2", "test3"];
  }
}
