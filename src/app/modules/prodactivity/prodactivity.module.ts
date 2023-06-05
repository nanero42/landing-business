import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdactivityComponent } from './prodactivity.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    ProdactivityComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    ProdactivityComponent,
  ],
})
export class ProdactivityModule { }
