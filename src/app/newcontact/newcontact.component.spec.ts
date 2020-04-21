import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcontactComponent } from './newcontact.component';

describe('NewcontactComponent', () => {
  let component: NewcontactComponent;
  let fixture: ComponentFixture<NewcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
