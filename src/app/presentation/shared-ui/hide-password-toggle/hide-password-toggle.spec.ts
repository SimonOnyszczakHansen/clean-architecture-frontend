import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HidePasswordToggle } from './hide-password-toggle';

describe('HidePasswordToggle', () => {
  let component: HidePasswordToggle;
  let fixture: ComponentFixture<HidePasswordToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HidePasswordToggle]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HidePasswordToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
