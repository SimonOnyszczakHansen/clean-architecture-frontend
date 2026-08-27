import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterResponseDto } from './dto/register-response.dto';
import { RegisterRepository } from '../../domain/ports/register-repository.port';

@Injectable({
	providedIn: 'root',
})
export class Register implements RegisterRepository {
	constructor(private http: HttpClient) { }

	registerUser(email: string, firstName: string, lastName: string, password: string, role: string): Observable<RegisterResponseDto> {
		const request = { email, firstName, lastName, password, role };
		return this.http.post<RegisterResponseDto>('/api/users', request);
	}
}
