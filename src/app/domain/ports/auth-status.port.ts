export abstract class AuthStatusPort {
	abstract isAuthenticated(): Promise<boolean>;
}