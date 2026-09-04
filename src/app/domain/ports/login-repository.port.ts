import { LoginResult } from './login-result';

export abstract class LoginRepositoryPort {
	abstract login(email: string, password: string): Promise<LoginResult>;
	abstract logout(): Promise<void>;
}