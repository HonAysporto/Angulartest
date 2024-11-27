import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatepinComponent } from './createpin/createpin.component';
import { DepositComponent } from './deposit/deposit.component';

export const routes: Routes = [
    {path:'', component:LandingpageComponent},
    {path:'signup', component:SignupComponent},
    {path:'signin', component:LoginComponent},
    {path:'customerdashboard', component:DashboardComponent},
    {path:'createpin', component:CreatepinComponent},
    {path:'deposit', component:DepositComponent},
];
