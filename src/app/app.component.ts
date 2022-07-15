import { Component, OnInit } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practic-formula-next';
  constructor(
    private routers: Router,
  ) { }
  ngOnInit() : void{

  }
}
