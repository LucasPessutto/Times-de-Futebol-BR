import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeModule } from './../home/home.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';

import { TimesRoutingModule } from './times-routing.module';
import { TimesComponent } from './times/times.component';
import { SaoPauloComponent } from './times/sao-paulo/sao-paulo.component';

@NgModule({
  declarations: [TimesComponent, SaoPauloComponent],
  imports: [
    CommonModule,
    TimesRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    HomeModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class TimesModule {}
