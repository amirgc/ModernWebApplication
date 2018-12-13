import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { UserComponent } from "./users/user/user.component";
import { AuthGuard } from "./_guards/auth";
import { UserdetailsComponent } from "./users/user/userdetails/userdetails.component";

export const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "users",
        component: UserComponent,
        pathMatch: "full"
      },
      {
        path: "users/:id",
        component: UserdetailsComponent,
        pathMatch: "full",
        canActivate: [AuthGuard]
      }
    ]
  }
];
