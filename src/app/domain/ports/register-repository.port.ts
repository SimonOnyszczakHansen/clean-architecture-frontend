import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

export interface RegisterRepository {
	registerUser(email: string, firstName: string, lastName: string, password: string, role: string): Observable<User>;
}