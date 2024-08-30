import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssClassBindingComponent } from './css-class-binding.component';

describe('CssClassBindingComponent', () => {
  let component: CssClassBindingComponent;
  let fixture: ComponentFixture<CssClassBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssClassBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
