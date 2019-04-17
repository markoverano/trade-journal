import { Routes } from '@angular/router';
import { AccountComponent } from './dashboard/account/account.component';
import { JournalComponent } from './dashboard/journal/journal.component';
import { CalcComponent } from './dashboard/calc/calc.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'account', component: AccountComponent },
      { path: 'journal', component: JournalComponent },
      { path: 'calc', component: CalcComponent },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
