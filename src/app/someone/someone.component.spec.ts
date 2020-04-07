import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeoneComponent } from './someone.component';

describe('SomeoneComponent', () => {
  let component: SomeoneComponent;
  let fixture: ComponentFixture<SomeoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
