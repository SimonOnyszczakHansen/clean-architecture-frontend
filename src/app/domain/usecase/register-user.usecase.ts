// this file basically just makes sure that the register feature has scalability and is future safe
import { RegisterRepositoryPort } from '../ports/register-repository.port';
import { User } from '../entities/user.entity';

export class RegisterUserUseCase {
constructor(private registerRepositoryPort: RegisterRepositoryPort) {}

  execute(email: string, firstName: string, lastName: string, password: string, role: string): Promise<User> {
	return this.registerRepositoryPort.registerUser(email, firstName, lastName, password, role);
  }
}