import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private page:Page) { }

  login(){
    this.router.navigate(['Home']);
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
     // Init your component properties here.
  }

}
