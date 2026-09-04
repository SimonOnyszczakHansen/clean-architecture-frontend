import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRepositoryPort } from '../../domain/ports/login-repository.port';
import { firstValueFrom } from 'rxjs';
import { User } from '../../domain/entities/user.entity';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginResult } from '../../domain/ports/login-result';

@Injectable({
  providedIn: 'root',
})
export class Login implements LoginRepositoryPort {
	constructor(private http: HttpClient) {}

	async login(email: string, password: string): Promise<LoginResult> {
		const dto = await firstValueFrom(this.http.post<LoginResponseDto>('/api/login', { email, password }));
		return {
			user: new User(dto.user.id, dto.user.firstName, dto.user.lastName, dto.user.email, dto.user.role),
		};
	}

	async logout(): Promise<void> {
		await firstValueFrom(this.http.post('/api/logout', {}));
	}
}
