import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MtxAppBarModule, MtxContainerModule, MtxPageModule, MtxTextModule } from 'mat-ex';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, HomeRoutingModule,
    MtxPageModule, MtxAppBarModule, MtxTextModule, MtxContainerModule
  ]
})
export class HomeModule { }
