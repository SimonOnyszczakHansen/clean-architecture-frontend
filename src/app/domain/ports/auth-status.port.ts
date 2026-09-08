// lets the guard ask "am I logged in" without knowing how that's actually checked
export abstract class AuthStatusPort {
	abstract isAuthenticated(): Promise<boolean>;
}