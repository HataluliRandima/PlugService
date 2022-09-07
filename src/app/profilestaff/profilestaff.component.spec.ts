import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilestaffComponent } from './profilestaff.component';

describe('ProfilestaffComponent', () => {
  let component: ProfilestaffComponent;
  let fixture: ComponentFixture<ProfilestaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilestaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilestaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
