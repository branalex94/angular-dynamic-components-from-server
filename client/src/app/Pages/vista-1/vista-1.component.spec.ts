import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista1Component } from './vista-1.component';

describe('Vista1Component', () => {
  let component: Vista1Component;
  let fixture: ComponentFixture<Vista1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vista1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vista1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
