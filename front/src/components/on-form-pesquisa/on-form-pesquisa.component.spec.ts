import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnFormPesquisaComponent } from './on-form-pesquisa.component';

describe('OnFormPesquisaComponent', () => {
  let component: OnFormPesquisaComponent;
  let fixture: ComponentFixture<OnFormPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnFormPesquisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnFormPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
