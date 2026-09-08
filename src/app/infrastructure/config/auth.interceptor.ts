// makes sure the auth cookie gets sent along with every request
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	return next(req.clone({ withCredentials: true }));
};