import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Register } from './interfaceadapters/register/register';
import { REGISTER_REPOSITORY } from './domain/ports/register-repository.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
	{ provide: REGISTER_REPOSITORY, useClass: Register }
  ]
};
