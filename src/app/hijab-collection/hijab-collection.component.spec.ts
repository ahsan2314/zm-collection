import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijabCollectionComponent } from './hijab-collection.component';

describe('HijabCollectionComponent', () => {
  let component: HijabCollectionComponent;
  let fixture: ComponentFixture<HijabCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijabCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijabCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
