import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocProgComponent } from './soc-prog.component';

describe('SocProgComponent', () => {
  let component: SocProgComponent;
  let fixture: ComponentFixture<SocProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocProgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
