import { Routes } from '@angular/router';
import { LoginPage } from './presentation/login/login-page/login-page';
import { RegisterPage } from './presentation/register/register-page/register-page';

export const routes: Routes = [
	{path: 'login', component: LoginPage},
	{path: 'register', component: RegisterPage},
	{path: '**', redirectTo: 'login', pathMatch: 'full'}
];
