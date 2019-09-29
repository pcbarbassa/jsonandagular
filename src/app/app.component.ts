import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'jsonappangular';
  ngOnInit(): void {
    console.log("exemplo de debug");
    console.log("Paulo Barbassa");
  }

}
