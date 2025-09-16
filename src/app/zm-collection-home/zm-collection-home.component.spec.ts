import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmCollectionHomeComponent } from './zm-collection-home.component';

describe('ZmCollectionHomeComponent', () => {
  let component: ZmCollectionHomeComponent;
  let fixture: ComponentFixture<ZmCollectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZmCollectionHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZmCollectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
