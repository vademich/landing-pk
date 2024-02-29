import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpkComponent } from './ourpk.component';

describe('OurpkComponent', () => {
  let component: OurpkComponent;
  let fixture: ComponentFixture<OurpkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurpkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurpkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
