import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnChanges {
  @Input() data: string = '';

  constructor() {


  }

  ngOnInit(): void {
    console.log('this.data at employee component on init : ', this.data);

  }

  ngOnChanges() {
    console.log('this.data at employee component on changes : ', this.data);

  }

}
