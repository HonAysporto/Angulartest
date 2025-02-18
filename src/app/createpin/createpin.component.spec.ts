import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepinComponent } from './createpin.component';

describe('CreatepinComponent', () => {
  let component: CreatepinComponent;
  let fixture: ComponentFixture<CreatepinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatepinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
