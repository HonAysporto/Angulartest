import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardnavComponent } from './dasboardnav.component';

describe('DasboardnavComponent', () => {
  let component: DasboardnavComponent;
  let fixture: ComponentFixture<DasboardnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasboardnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboardnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
