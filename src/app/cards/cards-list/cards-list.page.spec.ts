import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsListPage } from './cards-list.page';

describe('CardsListPage', () => {
  let component: CardsListPage;
  let fixture: ComponentFixture<CardsListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
