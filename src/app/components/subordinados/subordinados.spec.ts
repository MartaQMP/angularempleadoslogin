import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subordinados } from './subordinados';

describe('Subordinados', () => {
  let component: Subordinados;
  let fixture: ComponentFixture<Subordinados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subordinados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subordinados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
