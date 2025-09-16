import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EidCollectionComponent } from './eid-collection.component';

describe('EidCollectionComponent', () => {
  let component: EidCollectionComponent;
  let fixture: ComponentFixture<EidCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EidCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EidCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
