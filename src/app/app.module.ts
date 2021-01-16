import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EllipsisTooltipModule } from 'projects/ellipsis-tooltip/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EllipsisTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
