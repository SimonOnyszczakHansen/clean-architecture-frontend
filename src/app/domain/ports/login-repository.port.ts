import { User } from '../entities/user.entity';

export abstract class LoginRepositoryPort {
	abstract login(email: string, password: string): Promise<User>;
}