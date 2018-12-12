import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-userdetails",
  templateUrl: "./userdetails.component.html",
  styleUrls: ["./userdetails.component.css"]
})
export class UserdetailsComponent implements OnInit {
  user: any;
  userId: any;
  users: any;
  constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get("id");
    this.users = JSON.parse(localStorage.getItem("currentUser"));
    // console.log(this.users);
    console.log(this.users);
    this.users
      .filter(obj => obj.login.username === this.userId)
      .map(data => {
        this.user = data;
      });
  }

  ngOnInit() {}
}
