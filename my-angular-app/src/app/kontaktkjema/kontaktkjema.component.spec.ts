import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktkjemaComponent } from './kontaktkjema.component';

describe('KontaktkjemaComponent', () => {
  let component: KontaktkjemaComponent;
  let fixture: ComponentFixture<KontaktkjemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KontaktkjemaComponent]
    });
    fixture = TestBed.createComponent(KontaktkjemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
