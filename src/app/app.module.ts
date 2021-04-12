import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimeComponent } from './components/time/time.component';
import { AboutComponent } from './components/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddFormComponent } from './components/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimeComponent,
    AboutComponent,
    TodoItemComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
