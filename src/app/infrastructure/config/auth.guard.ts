import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { TokenStoragePort } from "../../domain/ports/token-storage.port";

export const authGuard: CanActivateFn = () => {
	const tokenStorage = inject(TokenStoragePort);
	const router = inject(Router);
	const token = tokenStorage.get();
	if (token && !token.isExpired()) {
		return true;
	}
	router.navigate(['/login']);
	return false;
};