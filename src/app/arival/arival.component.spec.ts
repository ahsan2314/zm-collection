import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArivalComponent } from './arival.component';

describe('ArivalComponent', () => {
  let component: ArivalComponent;
  let fixture: ComponentFixture<ArivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArivalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
