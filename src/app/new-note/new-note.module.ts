import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { HomeRoutingModule } from "./new-note-routing.module";
import { NewNoteComponent } from "./new-note.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        NewNoteComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewNoteModule {

    onNavigate(){
        window.open("https://www.google.com", "_blank");
    }
 }
