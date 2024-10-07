import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFinancieraComponent } from './info-financiera.component';

describe('InfoFinancieraComponent', () => {
  let component: InfoFinancieraComponent;
  let fixture: ComponentFixture<InfoFinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoFinancieraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
