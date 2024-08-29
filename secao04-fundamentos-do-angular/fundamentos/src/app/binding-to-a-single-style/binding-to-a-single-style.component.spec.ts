import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingToASingleStyleComponent } from './binding-to-a-single-style.component';

describe('BindingToASingleStyleComponent', () => {
  let component: BindingToASingleStyleComponent;
  let fixture: ComponentFixture<BindingToASingleStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingToASingleStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingToASingleStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
