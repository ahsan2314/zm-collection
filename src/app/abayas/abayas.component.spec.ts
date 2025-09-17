import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbayasComponent } from './abayas.component';

describe('AbayasComponent', () => {
  let component: AbayasComponent;
  let fixture: ComponentFixture<AbayasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbayasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbayasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
