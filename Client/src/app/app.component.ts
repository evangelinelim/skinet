import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/models/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  
  constructor() { }
  
  ngOnInit(): void {
    
  }
}