import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsmaComponent } from './isma.component';

describe('IsmaComponent', () => {
  let component: IsmaComponent;
  let fixture: ComponentFixture<IsmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IsmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
