// rules the Login class must follow, so the use case doesn't depend on HttpClient directly
import { User } from '../entities/user.entity';

export abstract class LoginRepositoryPort {
	abstract login(email: string, password: string): Promise<User>;
	abstract logout(): Promise<void>;
}