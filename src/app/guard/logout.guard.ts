import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

//Guard est une interface qui bloque ou donne accès à des routes//////////////////////
export class LogoutGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

              const token = localStorage.getItem('token');
              if(token){
                return false;
              } else{
                return true;
              }
  }

}
