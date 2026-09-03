import { Routes } from '@angular/router';
import { LoginPage } from './presentation/login/login-page/login-page';
import { RegisterPage } from './presentation/register/register-page/register-page';
import { DashboardPage } from './presentation/dashboard/dashboard-page/dashboard-page';
import { authGuard } from './infrastructure/config/auth.guard';

export const routes: Routes = [
	{path: 'login', component: LoginPage},
	{path: 'register', component: RegisterPage},
	{path: 'dashboard', component: DashboardPage, canActivate: [authGuard]},
	{path: '**', redirectTo: 'login', pathMatch: 'full'}
];
