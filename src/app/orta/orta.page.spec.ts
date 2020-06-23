import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrtaPage } from './orta.page';

describe('OrtaPage', () => {
  let component: OrtaPage;
  let fixture: ComponentFixture<OrtaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrtaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrtaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
