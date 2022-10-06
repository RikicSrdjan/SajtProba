import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenktureComponent } from './tenkture.component';

describe('TenktureComponent', () => {
  let component: TenktureComponent;
  let fixture: ComponentFixture<TenktureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenktureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenktureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
