import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDiv1Component } from './home-div1.component';

describe('HomeDiv1Component', () => {
  let component: HomeDiv1Component;
  let fixture: ComponentFixture<HomeDiv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDiv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDiv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
