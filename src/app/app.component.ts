import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  public name: string;
  displayChild: boolean = false;

  constructor(){
    this.name = 'Test';
    
  }

  ngOnInit(): void {
     console.log('ng on init called...');
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    // debugger
    console.log('ng on changes called...');

  }

  // ngDoCheck(): void {
  //   // debugger
  //   console.log('Do check calling..');
    
  // }

  // ngAfterContentInit(): void {
  //   // console.log('content init called....');
    
  // }
  // ngAfterContentChecked(): void {
  //   // console.log('after content change called..');
    
  // }

  // ngAfterViewInit(): void {
  //   this.name = 'new test data Test';
  //   // console.log('after view init called');
    
  // }
  // ngAfterViewChecked(): void {
  //   // console.log('view checked is called..');
    
  // }
}
