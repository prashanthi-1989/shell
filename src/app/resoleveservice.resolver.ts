import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResoleveserviceResolver {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let credentials={
      token:"kjhgfdsfghjkl;",
      sessionID:"lkjhgfdghjk"
    };
    return credentials
  }
}
