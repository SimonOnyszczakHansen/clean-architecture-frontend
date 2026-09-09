// handles login/logout logic, doesn't know about HTTP or cookies
import { User } from '../entities/user.entity';
import { LoginRepositoryPort } from '../ports/login-repository.port';

export class LoginUseCase {
	constructor(private loginRepositoryPort: LoginRepositoryPort) {}

	async login(email: string, password: string): Promise<User> {
		return this.loginRepositoryPort.login(email, password);
	}

	async logout(): Promise<void> {
		await this.loginRepositoryPort.logout();
	}
}