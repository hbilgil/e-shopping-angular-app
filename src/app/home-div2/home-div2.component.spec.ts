import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDiv2Component } from './home-div2.component';

describe('HomeDiv2Component', () => {
  let component: HomeDiv2Component;
  let fixture: ComponentFixture<HomeDiv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDiv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDiv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
