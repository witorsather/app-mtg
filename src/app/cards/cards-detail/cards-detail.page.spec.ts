import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsDetailPage } from './cards-detail.page';

describe('CardsDetailPage', () => {
  let component: CardsDetailPage;
  let fixture: ComponentFixture<CardsDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
