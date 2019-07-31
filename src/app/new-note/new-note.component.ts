import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  constructor(private router: Router,private page:Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  // public onTap() {
  //   this.router.navigate(["add-note"]);
  // } 

}
