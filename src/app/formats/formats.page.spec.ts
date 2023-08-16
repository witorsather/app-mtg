import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormatsPage } from './formats.page';

describe('FormatsPage', () => {
  let component: FormatsPage;
  let fixture: ComponentFixture<FormatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
