import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularDynamicGridComponent } from './angular-dynamic-grid.component';

describe('AngularDynamicGridComponent', () => {
  let component: AngularDynamicGridComponent;
  let fixture: ComponentFixture<AngularDynamicGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDynamicGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularDynamicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
