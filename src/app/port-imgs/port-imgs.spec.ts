import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortImgs } from './port-imgs';

describe('PortImgs', () => {
  let component: PortImgs;
  let fixture: ComponentFixture<PortImgs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortImgs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortImgs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
