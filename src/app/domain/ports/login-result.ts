// shape returned by login, separate from whatever the backend actually sends back
import { User } from "../entities/user.entity";

export interface LoginResult {
	user: User;
}