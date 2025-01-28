import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlProjectComponent } from './pl-project.component';

describe('PlProjectComponent', () => {
  let component: PlProjectComponent;
  let fixture: ComponentFixture<PlProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
