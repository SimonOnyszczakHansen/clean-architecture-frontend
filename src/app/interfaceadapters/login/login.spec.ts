import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { Login } from './login';
import { User } from '../../domain/entities/user.entity';

describe('Login', () => {
  let service: Login;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(Login);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should POST credentials to /api/login', () => {
    service.login('a@b.com', 'pw123');

    const req = httpMock.expectOne('/api/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email: 'a@b.com', password: 'pw123' });

    req.flush({
      user: { id: '1', firstName: 'A', lastName: 'B', email: 'a@b.com', role: 'user' },
      token: 'fake.jwt.token',
    });
  });

  it('should map the response into a real User instance and return the token', async () => {
    const resultPromise = service.login('a@b.com', 'pw123');

    const req = httpMock.expectOne('/api/login');
    req.flush({
      user: { id: '1', firstName: 'A', lastName: 'B', email: 'a@b.com', role: 'user' },
      token: 'fake.jwt.token',
    });

    const result = await resultPromise;

    expect(result.user).toBeInstanceOf(User);
    expect(result.user).toEqual(new User('1', 'A', 'B', 'a@b.com', 'user'));
    expect(result.token).toBe('fake.jwt.token');
  });
});

