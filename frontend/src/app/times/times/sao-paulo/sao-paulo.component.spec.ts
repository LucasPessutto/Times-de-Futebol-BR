import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaoPauloComponent } from './sao-paulo.component';

describe('SaoPauloComponent', () => {
  let component: SaoPauloComponent;
  let fixture: ComponentFixture<SaoPauloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaoPauloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaoPauloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
