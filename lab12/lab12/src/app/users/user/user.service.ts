import { Injectable } from "@angular/core";
// import { RequestOptions, Http, Response, Headers } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(reqObj): Observable<any> {
    let requesturl = "https://randomuser.me/api/?results=" + reqObj.results;

    if (reqObj.page) {
      requesturl =
        requesturl + "&page=" + reqObj.page + "&seed=" + reqObj.seed;
    }
    return this.http.get(requesturl);
  }
}
