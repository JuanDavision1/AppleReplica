import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloenappleComponent } from './soloenapple.component';

describe('SoloenappleComponent', () => {
  let component: SoloenappleComponent;
  let fixture: ComponentFixture<SoloenappleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloenappleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoloenappleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
