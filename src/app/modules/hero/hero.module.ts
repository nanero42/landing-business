import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    HeroComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    HeroComponent,
  ],
})
export class HeroModule { }
