import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPage } from './register-page';
import { RegisterUserUseCase } from '../../../domain/usecase/register-user.usecase';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPage],
      providers: [
        { provide: RegisterUserUseCase, useValue: { execute: vi.fn().mockResolvedValue({}) } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
