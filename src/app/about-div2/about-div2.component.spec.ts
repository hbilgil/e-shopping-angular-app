import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDiv2Component } from './about-div2.component';

describe('AboutDiv2Component', () => {
  let component: AboutDiv2Component;
  let fixture: ComponentFixture<AboutDiv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDiv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDiv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
