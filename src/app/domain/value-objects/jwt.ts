export class Jwt {
	// generic structure for a token, reusable for any claim, not just for authentication
	constructor(private readonly token: string) { }

	get claims(): Record<string, any> {
		const payload = this.token.split('.')[1];
		return JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
	}
}