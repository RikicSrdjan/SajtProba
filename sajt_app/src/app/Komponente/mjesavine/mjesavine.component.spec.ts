import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MjesavineComponent } from './mjesavine.component';

describe('MjesavineComponent', () => {
  let component: MjesavineComponent;
  let fixture: ComponentFixture<MjesavineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MjesavineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MjesavineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
