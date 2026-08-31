import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RegisterUserUseCase } from '../../../domain/usecase/register-user.usecase';
@Component({
	selector: 'app-register-page',
	imports: [],
	templateUrl: './register-page.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: './register-page.css',
})
export class RegisterPage {
	// Presentation layer should only depend on the domain layer hence why we dont call the register/HTTP adapter directly
	constructor(private registerUser: RegisterUserUseCase) { }

	register(email: string, firstName: string, lastName: string, password: string, role: string): void {
		this.registerUser.execute(email, firstName, lastName, password, role)
			.then(user => console.log('User registered:', user))
			.catch(error => console.error('Error registering user:', error));
	}
}
