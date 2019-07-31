import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";

import { NgForm } from '@angular/forms';
import { HttpClient} from "@angular/common/http";
import { User } from "../models/user";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    token: any;
    APIURL: string = 'http://basicnote.mandisuppliers.com/api/';
    user : User;
    
    constructor(private router: Router, private http: HttpClient,private page: Page ) {
        // Use the component constructor to inject providers.
        this.user = new User();
        this.user.email = ''; 
        this.user.password = '123'; 
    }

    public onTap() {
        this.router.navigate(["add-note"]);
    } 
    public register(){
        this.router.navigate(["register"]);
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        // Init your component properties here.
    }
    login() {
        alert(JSON.stringify(this.user));
        this.http.post(this.APIURL + 'auth/login',{email:this.user.email, password: this.user.password}).subscribe(data => {
            alert('asd');
            this.router.navigate(['new-note']); 
        },
        error => {
            alert('failure'+ JSON.stringify(error));
        });
      }
}
