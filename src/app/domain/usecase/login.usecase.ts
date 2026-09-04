import { User } from '../entities/user.entity';
import { LoginRepositoryPort } from '../ports/login-repository.port';

export class LoginUseCase {
	constructor(private loginRepositoryPort: LoginRepositoryPort) {}

	async login(email: string, password: string): Promise<User> {
		const { user } = await this.loginRepositoryPort.login(email, password);
		return user;
	}

	async logout(): Promise<void> {
		await this.loginRepositoryPort.logout();
	}
}