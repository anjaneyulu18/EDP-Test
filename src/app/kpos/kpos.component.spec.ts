import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KposComponent } from './kpos.component';

describe('KposComponent', () => {
  let component: KposComponent;
  let fixture: ComponentFixture<KposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
