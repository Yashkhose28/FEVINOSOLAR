import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetPromoterScoreComponent } from './net-promoter-score.component';

describe('NetPromoterScoreComponent', () => {
  let component: NetPromoterScoreComponent;
  let fixture: ComponentFixture<NetPromoterScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetPromoterScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetPromoterScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
