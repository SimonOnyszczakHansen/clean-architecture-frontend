import { AccessToken } from '../value-objects/access-token';

export abstract class TokenStoragePort {
	abstract save(token: AccessToken): void;
	abstract get(): AccessToken | null;
	abstract clear(): void;
}