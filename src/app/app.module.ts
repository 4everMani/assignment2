import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserServices } from './user.service';
import { HighlighterDirective } from './highlighter.directive'


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HighlighterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
