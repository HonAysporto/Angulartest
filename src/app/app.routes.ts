import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'', component:LandingpageComponent},
    {path:'signup', component:SignupComponent},
    {path:'signin', component:LoginComponent},
    {path:'customerdashboard', component:DashboardComponent},
];
