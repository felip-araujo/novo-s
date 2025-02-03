import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from "./contato/contato.component";
import { PlProjectComponent } from './pl-project/pl-project.component';
import { DpoComponent } from './dpo/dpo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreMimComponent,
    DpoComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ContatoComponent,
    PlProjectComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
