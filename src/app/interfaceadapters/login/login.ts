import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRepositoryPort } from '../../domain/ports/login-repository.port';
import { firstValueFrom } from 'rxjs';
import { User } from '../../domain/entities/user.entity';

@Injectable({
  providedIn: 'root',
})
export class Login implements LoginRepositoryPort {
	constructor(private http: HttpClient) {}

	login(email: string, password: string): Promise<User> {
  		const request = { email, password };
  		return firstValueFrom(this.http.post<User>('/api/login', request));
	}
}
