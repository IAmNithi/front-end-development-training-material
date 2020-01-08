import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetedCarouselComponent } from './faceted-carousel.component';

describe('FacetedCarouselComponent', () => {
  let component: FacetedCarouselComponent;
  let fixture: ComponentFixture<FacetedCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacetedCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacetedCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
