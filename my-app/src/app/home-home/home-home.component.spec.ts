import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHomeComponent } from './home-home.component';

describe('HomeHomeComponent', () => {
  let component: HomeHomeComponent;
  let fixture: ComponentFixture<HomeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
