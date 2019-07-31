import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private router: Router,private page: Page) {
        // Use the component constructor to inject providers.
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
}
