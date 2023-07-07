import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolveservicetwoService {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let credentials={
      token:"kjhgfdsfghjkl;",
      sessionID:"lkjhgfdghjk"
    };
    return credentials
  }

}
