import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NewNoteComponent } from "./new-note/new-note.component";

const routes: Routes = [
    { path: "", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "new-note", loadChildren: "~/app/new-note/new-note.module#NewNoteModule" } 
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
