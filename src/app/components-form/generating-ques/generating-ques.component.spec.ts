import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingQuesComponent } from './generating-ques.component';

describe('GeneratingQuesComponent', () => {
  let component: GeneratingQuesComponent;
  let fixture: ComponentFixture<GeneratingQuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratingQuesComponent]
    });
    fixture = TestBed.createComponent(GeneratingQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
