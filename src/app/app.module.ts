import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ByteButtonComponent } from './byte-button/byte-button.component';
import { BitButtonComponent } from './bit-button/bit-button.component';
import { ColorPanelComponent } from './color-panel/color-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ByteButtonComponent,
    BitButtonComponent,
    ColorPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
