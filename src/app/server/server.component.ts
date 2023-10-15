import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color:white
  }`]
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';
  // constructor is the inbuilt method that executes when this component is created
  //math.random gives a random value between 0 and 1 (both inclusive)
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
