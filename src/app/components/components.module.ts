import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInfoComponent } from './text-info/text-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TextInfoComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  exports: [
    TextInfoComponent,
  ],
})
export class ComponentsModule { }
