npm install bootstrap

Change angular.json
"node_modules/bootstrap/dist/css/bootstrap.min.css"
<!-- ----------------------------------------------------------- -->

ng g c parent

ng g c parent/child

App component html : 
<app-parent></app-parent>
<!-- ---------------------------------------------- -->
parent component html : 

<div class="container">

  <h3>Input Output Example</h3>

  <div class="card">
    <div class="card-body">

      <p>Parent Component</p>
      <p class="mt-3">
        <button type="button" class="btn btn-primary btn-sm" (click)="setAngularVersion()">Set Latest Angular Version</button>
      </p>

      <p>{{message}}</p>

      <!--Template Referance Example-->
      <!-- <h3>Local variable Example</h3>
      <p>{{childComponent.data}}</p> -->

      <div class="card">
        <div class="card-body">
          <app-child #childComponent [angularVersion]="angularVersion" (passData)="getChildMessage($event)"></app-child>
        </div>
      </div>

    </div>
  </div>
</div>

----------------------------------------------
parent component ts file : 
  angularVersion: number = 10;
  message: string = '';

  ngOnInit() {}

  setAngularVersion() {
    this.angularVersion = 12;
  }

  getChildMessage(data:any) {
    this.message = data;
  }

-------------------------------------------------------
child component html

<p>Child Component</p>

<p>
  My Angular Version is {{angularVersion}}
</p>

<button type="button" class="btn btn-primary btn-sm" (click)="passDataToParent($event)">Pass Data to Parent</button>

------------------------------------------------------------
child component ts file : 

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

---------------------------------------------------------
























<h1>Hello , current stage is - {{currentState}}</h1>
public currentState: string;

OnChanges
ngOnChanges() {
    console.log("AppComponent: OnChanges");
}

OnInit
  ngOnInit(): void {
    debugger
    this.currentState = 'OnInit calling.'
  }

DoCheck
 ngDoCheck() {
      console.log("AppComponent: DoCheck");
    }


AfterContentInit
   ngAfterContentInit(): void {
    debugger
    this.currentState = 'ngAfterContentInit calling.'
  }

AfterContentChecked
   ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
    }

AfterViewInit
   ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
    }

AfterViewChecked
    ngAfterViewChecked() {
      console.log("AppComponent:AfterViewChecked");
    }

OnDestroy
    ngOnDestroy() {
      console.log("AppComponent:OnDestroy");
    }