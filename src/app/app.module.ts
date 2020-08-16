import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './components/animals/animals.component';
import {AnimalService} from './services/animal.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './components/update/update.component';
import {AppRoutingRoutingModule} from './app-routing/app-routing-routing.module'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingRoutingModule,
    FormsModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
