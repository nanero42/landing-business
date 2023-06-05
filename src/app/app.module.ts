import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModule } from './modules/hero/hero.module';
import { ProdactivityModule } from './modules/prodactivity/prodactivity.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeroModule,
    ProdactivityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
