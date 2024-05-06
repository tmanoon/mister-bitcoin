import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesPreviewComponent } from './moves-preview.component';

describe('MovesPreviewComponent', () => {
  let component: MovesPreviewComponent;
  let fixture: ComponentFixture<MovesPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovesPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
