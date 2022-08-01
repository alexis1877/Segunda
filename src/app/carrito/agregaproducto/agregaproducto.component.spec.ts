import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaproductoComponent } from './agregaproducto.component';

describe('AgregaproductoComponent', () => {
  let component: AgregaproductoComponent;
  let fixture: ComponentFixture<AgregaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
