import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginUseCase } from '../../../domain/usecase/login.usecase';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login-page.css',
})
export class LoginPage {
	constructor(private loginUseCase: LoginUseCase) { }

	login(email: string, password: string): void {
		this.loginUseCase.login(email, password)
			.then(user => console.log('User logged in:', user))
			.catch(error => console.error('Error logging in:', error));
	}
}
