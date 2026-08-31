import { Injectable } from '@angular/core';
import { TokenStoragePort } from '../../domain/ports/token-storage.port';
import { AccessToken } from '../../domain/value-objects/access-token';

@Injectable({ providedIn: 'root' })
export class LocalStorageTokenStorage implements TokenStoragePort {
    private readonly key = 'auth_token';

    save(token: AccessToken): void {
        localStorage.setItem(this.key, token.value);
    }
    get(): AccessToken | null {
        const raw = localStorage.getItem(this.key);
        return raw ? new AccessToken(raw) : null;
    }
    clear(): void {
        localStorage.removeItem(this.key);
    }
}