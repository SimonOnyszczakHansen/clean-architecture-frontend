import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { RegisterRepositoryPort } from '../../domain/ports/register-repository.port';
import { User } from '../../domain/entities/user.entity';
import { RegisterResponseDto } from './dto/register-response.dto';

@Injectable({
	providedIn: 'root',
})
export class Register implements RegisterRepositoryPort {
	constructor(private http: HttpClient) { }

	registerUser(email: string, firstName: string, lastName: string, password: string, role: string): Promise<User> {
		const request = { email, firstName, lastName, password, role };
		const dto = firstValueFrom(this.http.post<RegisterResponseDto>('/api/users', request));
		return dto.then(response => new User(response.id, response.email, response.firstName, response.lastName, response.role));
	}
}
