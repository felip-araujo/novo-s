import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdpbComponent } from './idpb.component';

describe('IdpbComponent', () => {
  let component: IdpbComponent;
  let fixture: ComponentFixture<IdpbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdpbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
