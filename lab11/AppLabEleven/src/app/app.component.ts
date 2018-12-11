import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>Parent {{ seedValue }} From child:{{ newValue }}</div>
    <app-child
      [seedValue]="seedValue"
      (newValue)="onNewChange($event)"
    ></app-child>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "AppLabEleven";
  seedValue: number = 10;
  newValue: number;
  onNewChange(newValue: number) {
    this.newValue = newValue;
  }
}
