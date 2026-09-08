// rules the Register class must follow, so the use case doesn't depend on HttpClient directly
import { User } from '../entities/user.entity';

export abstract class RegisterRepositoryPort {
	abstract registerUser(email: string, firstName: string, lastName: string, password: string, role: string): Promise<User>;
}