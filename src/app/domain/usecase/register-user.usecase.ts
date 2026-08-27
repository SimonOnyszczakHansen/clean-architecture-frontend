import { Injectable } from '@angular/core';
import { RegisterRepository } from '../ports/register-repository.port';
import { User } from '../entities/user.entity';

@Injectable({ providedIn: 'root' })
export class RegisterUserUseCase {
constructor(private registerRepository: RegisterRepository) {}

  execute(email: string, firstName: string, lastName: string, password: string, role: string): Promise<User> {
	return this.registerRepository.registerUser(email, firstName, lastName, password, role);
  }
}