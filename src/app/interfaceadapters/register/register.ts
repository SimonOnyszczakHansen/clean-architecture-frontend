import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterResponseDto } from './dto/register-response.dto';
import { firstValueFrom } from 'rxjs';
import { RegisterRepositoryPort } from '../../domain/ports/register-repository.port';

@Injectable({
	providedIn: 'root',
})
export class Register implements RegisterRepositoryPort {
	constructor(private http: HttpClient) { }

	registerUser(email: string, firstName: string, lastName: string, password: string, role: string): Promise<RegisterResponseDto> {
		const request = { email, firstName, lastName, password, role };
		return firstValueFrom(this.http.post<RegisterResponseDto>('/api/users', request));
	}
}
