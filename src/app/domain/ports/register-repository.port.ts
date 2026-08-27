import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

export abstract class RegisterRepository {
	abstract registerUser(email: string, firstName: string, lastName: string, password: string, role: string): Observable<User>;
}