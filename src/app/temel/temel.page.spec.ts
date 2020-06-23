import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemelPage } from './temel.page';

describe('TemelPage', () => {
  let component: TemelPage;
  let fixture: ComponentFixture<TemelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
