import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";


//This is a class intercepting something like Token /////////////////////////
export class LoginInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error("Method not implemented.");
    const token = localStorage.getItem('token');

    //.set('access_token', token);
    if(token != null){
      const keys= req.params.keys();
      let params = new HttpParams();

      for (let i=0; i<keys.length; i++) {
        const value = req.params.get(keys[i]);
        if(value != null){
          params = params.append(keys[i], value);
        }
      }
      const cloneRequete= req.clone({params});
      return next.handle(cloneRequete);
    }
    else{
      return next.handle(req);
    }
  }

}

export const LoginInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass : LoginInterceptor,
  multi :true
};
