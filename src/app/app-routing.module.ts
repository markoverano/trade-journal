import { Routes } from '@angular/router';
import {AccountComponent } from '../app/account/account.component';
import {JournalComponent} from '../app/journal/journal.component';
import { CalcComponent } from './calc/calc.component';


export const appRoutes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'calc', component: CalcComponent },
  { path: '', redirectTo: '/account', pathMatch: 'full'},
];
