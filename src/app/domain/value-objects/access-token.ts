import { Jwt } from './jwt';

export class AccessToken {
	private readonly jwt: Jwt;

	constructor(private readonly token: string) {
		this.jwt = new Jwt(token);
	}

	get value(): string {
		return this.token;
	}

	isExpired(): boolean {
        return Date.now() >= this.jwt.claims['exp'] * 1000;
    }
}