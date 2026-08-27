import { Injectable, Inject } from '@angular/core';
import { RegisterRepository } from '../ports/register-repository.port';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

@Injectable({ providedIn: 'root' })
export class RegisterUserUseCase {
constructor(private registerRepository: RegisterRepository) {}

  execute(email: string, firstName: string, lastName: string, password: string, role: string): Observable<User> {
	return this.registerRepository.registerUser(email, firstName, lastName, password, role);
  }
}