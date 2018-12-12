import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { IsVisibleDirective } from "./is-visible.directive";
import { DumpComponent } from "./dump/dump.component";
import { SmartComponent } from "./smart/smart.component";
import { LoggableDirective } from "./loggable.directive";
import { UsersModule } from "./users/users.module";
import { RouterModule } from "@angular/router";
import { routes } from "./app-route.module";

import { AuthGuard } from "./_guards/auth";
import { UserService } from "./users/user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    IsVisibleDirective,
    DumpComponent,
    SmartComponent,
    LoggableDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    UsersModule,
    [RouterModule.forRoot(routes, { useHash: false })]
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
