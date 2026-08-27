import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Register } from './interfaceadapters/register/register';
import { RegisterRepository } from './domain/ports/register-repository.port';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
	{ provide: RegisterRepository, useClass: Register }
  ]
};
