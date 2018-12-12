import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  users: [];
  wholeData: any;
  reqObj: any;

  constructor(private userService: UserService) {
    this.getUsers();
  }

  ngOnInit() {}

  getUsers() {
    if (this.reqObj) {
      this.reqObj = {
        page: this.wholeData.info.page + 1,
        results: this.wholeData.info.results,
        seed: this.wholeData.info.seed
      };
    } else {
      this.reqObj = {
        results: 5
      };
    }
    this.userService.getUsers(this.reqObj).subscribe(data => {
      console.log(data);
      this.users = data.results;
      this.wholeData = data;
      //   console.log(JSON.stringify(data));
      //  // console.log(typeof data);
      localStorage.setItem("currentUser", JSON.stringify(this.users));
    });
  }
}
