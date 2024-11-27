import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferComponent } from './tranfer.component';

describe('TranferComponent', () => {
  let component: TranferComponent;
  let fixture: ComponentFixture<TranferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
