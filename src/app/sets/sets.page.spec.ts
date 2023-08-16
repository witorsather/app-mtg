import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetsPage } from './sets.page';

describe('SetsPage', () => {
  let component: SetsPage;
  let fixture: ComponentFixture<SetsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
