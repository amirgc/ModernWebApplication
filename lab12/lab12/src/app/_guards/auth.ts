import { Observable } from "rxjs";
import { Injectable, Inject } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): Observable<boolean> | boolean {
    return true;
  }
}
