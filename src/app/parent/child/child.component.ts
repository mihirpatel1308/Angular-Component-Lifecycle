import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // @Input() angularVersion: number = 0;

  @Input() public set angularVersion(value: number) {
    if (value) {
      console.log('angular version : ', value);
      this._version = value;
    }
  };

  public get angularVersion(): number {
    return this._version;
  }

  @Output() passData = new EventEmitter<string>();

  data: string = 'Child Component Data';

  private _version: any;
  constructor() { }

  ngOnInit() { }

  passDataToParent(data: any) {
    this.passData.emit('Message from Child to Parent - Hey Whatsupp');
  }

  ngOnChanges(changes: any): void {
    console.log('changes at on Init : ' , changes);    
  }

}
