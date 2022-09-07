import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdateComponent } from './bookdate.component';

describe('BookdateComponent', () => {
  let component: BookdateComponent;
  let fixture: ComponentFixture<BookdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
