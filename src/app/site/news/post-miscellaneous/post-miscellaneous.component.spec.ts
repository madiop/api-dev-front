import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMiscellaneousComponent } from './post-miscellaneous.component';

describe('PostMiscellaneousComponent', () => {
  let component: PostMiscellaneousComponent;
  let fixture: ComponentFixture<PostMiscellaneousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMiscellaneousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMiscellaneousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
