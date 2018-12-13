import { Observable } from "rxjs";
import { Injectable, Inject } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (route.paramMap.get("id")) {
      console.log("auth", route.paramMap.get("id"));
      return true;
    } else {
      return false;
    }
  }
}
