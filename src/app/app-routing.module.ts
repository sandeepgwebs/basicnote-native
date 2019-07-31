import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NewNoteComponent } from '../app/new-note/new-note.component';
import { RegisterComponent } from '../app/register/register.component';
import { HomeComponent } from '../app/home/Home.Component';

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "add-note", component: NewNoteComponent},
    { path: "register", component: RegisterComponent},
    { path: "Home", component: HomeComponent},

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
