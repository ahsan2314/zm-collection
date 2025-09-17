import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbayaCollectionComponent } from './abaya-collection.component';

describe('AbayaCollectionComponent', () => {
  let component: AbayaCollectionComponent;
  let fixture: ComponentFixture<AbayaCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbayaCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbayaCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
