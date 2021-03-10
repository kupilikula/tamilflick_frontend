import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZineComponent } from './zine.component';

describe('ZineComponent', () => {
  let component: ZineComponent;
  let fixture: ComponentFixture<ZineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
