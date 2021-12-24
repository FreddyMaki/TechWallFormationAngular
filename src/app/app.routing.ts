import { RouterModule, Routes } from "@angular/router";
import { ColorComponent } from "./color/color.component";
import { AddCvComponent } from "./cvTech/add-cv/add-cv.component";
import { CvComponent } from "./cvTech/cv/cv.component";
import { ErrorComponent } from "./cvTech/error/error.component";
import { MoreDetailsComponent } from "./cvTech/more-details/more-details.component";
import { UpdateCvComponent } from "./cvTech/update-cv/update-cv.component";
import { LoginGuard } from "./guard/login.guard";
import { LogoutGuard } from "./guard/logout.guard";
import { LoginComponent } from "./login/login.component";
import { TaskManagerComponent } from "./task-manager/task-manager.component";

//Definition des chemins vers les pages à afficher selon les besoins:
//dans un tableau
//Le LoginGuard empeche ou donne l'accès à des routes
const APP_ROUTES : Routes=[
  {path: 'cv',children: [
    {path : '',component : CvComponent},
    {path : 'updateCv/:id',component : UpdateCvComponent},
    {path: 'add', component: AddCvComponent, canActivate: [LoginGuard]},
    {path: ':id', component: MoreDetailsComponent}
  ]},
   {path: '', component: CvComponent},
   {path:'color', component: ColorComponent},
   {path:'taskManager', component: TaskManagerComponent},
   {path:'login', component: LoginComponent,canActivate: [LogoutGuard]},
   {path: '**', component: ErrorComponent}

];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
