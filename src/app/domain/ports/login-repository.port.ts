// rules the Login class must follow, so the use case doesn't depend on HttpClient directly
import { LoginResult } from './login-result';

export abstract class LoginRepositoryPort {
	abstract login(email: string, password: string): Promise<LoginResult>;
	abstract logout(): Promise<void>;
}