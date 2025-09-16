import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACCESSORIESComponent } from './accessories.component';

describe('ACCESSORIESComponent', () => {
  let component: ACCESSORIESComponent;
  let fixture: ComponentFixture<ACCESSORIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACCESSORIESComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACCESSORIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
