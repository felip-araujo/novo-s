import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperioComponent } from './imperio.component';

describe('ImperioComponent', () => {
  let component: ImperioComponent;
  let fixture: ComponentFixture<ImperioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImperioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImperioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
