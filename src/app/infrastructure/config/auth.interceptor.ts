import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenStoragePort } from '../../domain/ports/token-storage.port';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const tokenstorage = inject(TokenStoragePort);
	const token = tokenstorage.get();
	if(token && !token.isExpired()) {
		req = req.clone({ setHeaders: {Authorization: `Bearer ${token.value}`}});
	}
	return next(req);
};