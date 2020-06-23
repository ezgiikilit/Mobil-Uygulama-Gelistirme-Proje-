import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IleriPage } from './ileri.page';

describe('IleriPage', () => {
  let component: IleriPage;
  let fixture: ComponentFixture<IleriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IleriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IleriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
