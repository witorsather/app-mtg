import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubtypesPage } from './subtypes.page';

describe('SubtypesPage', () => {
  let component: SubtypesPage;
  let fixture: ComponentFixture<SubtypesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubtypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
