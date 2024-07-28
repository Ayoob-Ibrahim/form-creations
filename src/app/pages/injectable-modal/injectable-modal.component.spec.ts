import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableModalComponent } from './injectable-modal.component';

describe('InjectableModalComponent', () => {
  let component: InjectableModalComponent;
  let fixture: ComponentFixture<InjectableModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjectableModalComponent]
    });
    fixture = TestBed.createComponent(InjectableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
