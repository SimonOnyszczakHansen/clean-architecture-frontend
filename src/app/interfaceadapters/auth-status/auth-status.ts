import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, catchError, of } from 'rxjs';
import { AuthStatusPort } from '../../domain/ports/auth-status.port';

@Injectable({ providedIn: 'root' })
export class AuthStatus implements AuthStatusPort {
    constructor(private http: HttpClient) {}

    async isAuthenticated(): Promise<boolean> {
        return firstValueFrom(
            this.http.get('/api/me').pipe(
                catchError(() => of(null))
            )
        ).then(result => result !== null);
    }
}