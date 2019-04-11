import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-list',
  template: `
  <ul style="list-style-type:none;">
  <li>Andrew</li>
  <li>Amanda</li>
  <li>Tom</li>
  </ul>
  `,
  styles: [
  ]
})
export class TeachersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
