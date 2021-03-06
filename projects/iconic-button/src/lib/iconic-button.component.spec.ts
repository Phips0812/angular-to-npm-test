import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicButtonComponent } from './iconic-button.component';

describe('IconicButtonComponent', () => {
  let component: IconicButtonComponent;
  let fixture: ComponentFixture<IconicButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconicButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
