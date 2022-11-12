import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDiv1Component } from './about-div1.component';

describe('AboutDiv1Component', () => {
  let component: AboutDiv1Component;
  let fixture: ComponentFixture<AboutDiv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDiv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDiv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
