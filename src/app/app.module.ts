import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrastlewarkComponent } from './brastlewark/brastlewark.component';
import { HttpClientModule } from '@angular/common/http';
import { GnomeCardComponent } from './gnome-card/gnome-card.component';
import { GnomeDetailsComponent } from './gnome-details/gnome-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BrastlewarkComponent,
    GnomeCardComponent,
    GnomeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
