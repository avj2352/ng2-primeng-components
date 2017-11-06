import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { PanelModule, MenuModule, MenuItem } from 'primeng/primeng';
//Components
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { SideBarComponent } from './side-bar/side-bar.component';
//Directives
import {AppBasicHighlight} from './directives/appBasicHighlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    SideBarComponent,
    AppBasicHighlight,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    PanelModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
