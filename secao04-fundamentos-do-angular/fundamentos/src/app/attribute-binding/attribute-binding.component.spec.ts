import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBindingComponent } from './attribute-binding.component';

describe('AttributeBindingComponent', () => {
  let component: AttributeBindingComponent;
  let fixture: ComponentFixture<AttributeBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributeBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
