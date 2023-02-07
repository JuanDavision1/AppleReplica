import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvyCasaComponent } from './tvy-casa.component';

describe('TvyCasaComponent', () => {
  let component: TvyCasaComponent;
  let fixture: ComponentFixture<TvyCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvyCasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvyCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
