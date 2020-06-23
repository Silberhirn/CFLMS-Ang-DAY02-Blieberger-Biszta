import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  donated: number = 0;
  donate (){
  	this.donated=this.donated+10
  }

  ngOnInit(): void {
  }

}
