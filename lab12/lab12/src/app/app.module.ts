import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IsVisibleDirective } from './is-visible.directive';
import { DumpComponent } from './dump/dump.component';
import { SmartComponent } from './smart/smart.component';
import { LoggableDirective } from './loggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    IsVisibleDirective,
    DumpComponent,
    SmartComponent,
    LoggableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
