import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSectionComponent } from './on-section.component';

describe('OnSectionComponent', () => {
  let component: OnSectionComponent;
  let fixture: ComponentFixture<OnSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
