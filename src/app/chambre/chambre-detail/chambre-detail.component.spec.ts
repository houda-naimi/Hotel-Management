import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreDetailComponent } from './chambre-detail.component';

describe('ChambreDetailComponent', () => {
  let component: ChambreDetailComponent;
  let fixture: ComponentFixture<ChambreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChambreDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
