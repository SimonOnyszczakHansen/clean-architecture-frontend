import { User } from '../entities/user.entity';
import { LoginRepositoryPort } from '../ports/login-repository.port';
import { TokenStoragePort } from '../ports/token-storage.port';
import { AccessToken } from '../value-objects/access-token';

export class LoginUseCase {
	constructor(private loginRepositoryPort: LoginRepositoryPort, private tokenStorage: TokenStoragePort) {}

	async login(email: string, password: string): Promise<User> {
		const {user, token} = await this.loginRepositoryPort.login(email, password);
		this.tokenStorage.save(new AccessToken(token));
		return user;
	}
}