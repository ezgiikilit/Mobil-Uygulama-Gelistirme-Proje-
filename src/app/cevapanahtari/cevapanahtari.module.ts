import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CevapanahtariPageRoutingModule } from './cevapanahtari-routing.module';

import { CevapanahtariPage } from './cevapanahtari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CevapanahtariPageRoutingModule
  ],
  declarations: [CevapanahtariPage]
})
export class CevapanahtariPageModule {}
