import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbookComponent } from './trackbook.component';

describe('TrackbookComponent', () => {
  let component: TrackbookComponent;
  let fixture: ComponentFixture<TrackbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
