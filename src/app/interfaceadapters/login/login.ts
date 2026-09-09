// the actual HTTP calls for login/logout; fulfills LoginRepositoryPort so the domain stays framework-free
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRepositoryPort } from '../../domain/ports/login-repository.port';
import { firstValueFrom } from 'rxjs';
import { User } from '../../domain/entities/user.entity';
import { LoginResponseDto } from './dto/login-response.dto';

@Injectable({
  providedIn: 'root',
})
export class Login implements LoginRepositoryPort {
	constructor(private http: HttpClient) {}

    async login(email: string, password: string): Promise<User> {
        const dto = await firstValueFrom(this.http.post<LoginResponseDto>('/api/login', { email, password }));
        return new User(dto.id, dto.firstName, dto.lastName, dto.email, dto.role);
    }

	async logout(): Promise<void> {
		await firstValueFrom(this.http.post('/api/logout', {}));
	}
}
