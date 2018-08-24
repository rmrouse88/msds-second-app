import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  active:boolean;
  
  ngOnInit(){
    this.active = false;
  }

  changeActive() : void {
    this.active = !this.active;      
  }

}
