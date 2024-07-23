import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewDataComponent } from './card-view-data.component';

describe('CardViewDataComponent', () => {
  let component: CardViewDataComponent;
  let fixture: ComponentFixture<CardViewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardViewDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
