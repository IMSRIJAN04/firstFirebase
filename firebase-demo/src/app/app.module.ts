import{ environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { from } from 'rxjs';
import { TodoComponent } from './todo/todo.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
