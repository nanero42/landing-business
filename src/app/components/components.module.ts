import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInfoComponent } from './text-info/text-info.component';



@NgModule({
  declarations: [
    TextInfoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextInfoComponent,
  ],
})
export class ComponentsModule { }
