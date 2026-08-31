import { User } from "../entities/user.entity";

export interface LoginResult {
	user: User;
	token: string;
}