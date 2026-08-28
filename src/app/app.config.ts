import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Register } from './interfaceadapters/register/register';
import { RegisterRepositoryPort } from './domain/ports/register-repository.port';
import { RegisterUserUseCase } from './domain/usecase/register-user.usecase';
import { LoginRepositoryPort } from './domain/ports/login-repository.port';
import { Login } from './interfaceadapters/login/login';
import { LoginUseCase } from './domain/usecase/login.usecase';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
	{ 
    provide: RegisterRepositoryPort, useClass: Register 
  },
  {
    // RegisterUserUseCase has no @Injectable (since we want to follow clean architecture principles), so it needs manual wiring here
    provide: RegisterUserUseCase,
    useFactory: (repo: RegisterRepositoryPort) => new RegisterUserUseCase(repo),
    deps: [RegisterRepositoryPort]
  },
  {
    provide: LoginRepositoryPort, useClass: Login
  },
  {
    provide: LoginUseCase,
    useFactory: (repo: LoginRepositoryPort) => new LoginUseCase(repo),
    deps: [LoginRepositoryPort]
  }
  ]
};
