import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterResponseDto } from './dto/register-response.dto';
import { firstValueFrom } from 'rxjs';
import { RegisterRepositoryPort } from '../../domain/ports/register-repository.port';
import { User } from '../../domain/entities/user.entity';

@Injectable({
	providedIn: 'root',
})
export class Register implements RegisterRepositoryPort {
	constructor(private http: HttpClient) { }

	registerUser(email: string, firstName: string, lastName: string, password: string, role: string): Promise<RegisterResponseDto> {
		const request = { email, firstName, lastName, password, role };
		return firstValueFrom(this.http.post<RegisterResponseDto>('/api/users', request))
			.then(dto => new User(dto.id, dto.firstName, dto.lastName, dto.email, dto.role));
	}
}
