import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleExport } from './title-export';

describe('TitleExport', () => {
  let component: TitleExport;
  let fixture: ComponentFixture<TitleExport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleExport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleExport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
