import { LoginRepositoryPort } from '../ports/login-repository.port';
import { User } from '../entities/user.entity';

export class LoginUseCase {
	constructor(private loginRepositoryPort: LoginRepositoryPort) {}

	async login(email: string, password: string): Promise<User> {
		return this.loginRepositoryPort.login(email, password);
	}
}