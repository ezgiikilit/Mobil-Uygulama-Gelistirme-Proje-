import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CevapanahtariPage } from './cevapanahtari.page';

describe('CevapanahtariPage', () => {
  let component: CevapanahtariPage;
  let fixture: ComponentFixture<CevapanahtariPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CevapanahtariPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CevapanahtariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
