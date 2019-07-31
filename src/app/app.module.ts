import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewNoteComponent } from '../app/new-note/new-note.component';
import { RegisterComponent } from '../app/register/register.component';
import { HomeComponent } from '../app/home/Home.Component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
      //LoginPipe
      NewNoteComponent,
      RegisterComponent,
      HomeComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
