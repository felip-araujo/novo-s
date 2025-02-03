import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappBComponent } from './whatsapp-b.component';

describe('WhatsappBComponent', () => {
  let component: WhatsappBComponent;
  let fixture: ComponentFixture<WhatsappBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatsappBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
