import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthStatusPort } from "../../domain/ports/auth-status.port";

export const authGuard: CanActivateFn = async () => {
	const authStatus = inject(AuthStatusPort)
	const router = inject(Router);
	if (await authStatus.isAuthenticated()) {
		return true;
	}
	router.navigate(['/login']);
	return false;
};