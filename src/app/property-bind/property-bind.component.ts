import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  templateUrl: './property-bind.component.html',
  styleUrls: ['./property-bind.component.css'],
})
export class PropertyBindComponent implements OnInit {
  serverCreationStatus = 'No server was created';
  allowNewServer = false;
  serverName = 'TestServer';
  // servers = ['testserver', 'testserver1'];
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}
  onCreateServer() {
    this.serverCreated = true;
    // this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created. Name is ' + this.serverName;
  }
  // onUpdateServerName(event: any) {
  //   console.log(event);
  // }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
