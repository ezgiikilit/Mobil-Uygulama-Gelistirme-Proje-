import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemelPageRoutingModule } from './temel-routing.module';

import { TemelPage } from './temel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemelPageRoutingModule
  ],
  declarations: [TemelPage]
})
export class TemelPageModule {}
