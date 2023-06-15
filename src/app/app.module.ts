import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TranslatePipe, TranslateService } from './translate';
import { LanguagesService } from './translate/languages';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ TranslateService, LanguagesService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
