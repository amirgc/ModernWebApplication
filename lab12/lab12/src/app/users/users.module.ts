import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user/user.component";
import { UserdetailsComponent } from "./user/userdetails/userdetails.component";

@NgModule({
  declarations: [UserComponent, UserdetailsComponent],
  imports: [CommonModule]
})
export class UsersModule {}
