import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  angularVersion: number = 10;
  message: string = '';

  ngOnInit() {}

  setAngularVersion() {
    this.angularVersion = 15;
  }

  getChildMessage(data:any) {
    this.message = data;
  }

}
