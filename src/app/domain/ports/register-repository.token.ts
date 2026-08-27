import { InjectionToken } from '@angular/core';
import { RegisterRepository } from './register-repository.port';

export const REGISTER_REPOSITORY = new InjectionToken<RegisterRepository>('RegisterRepository');