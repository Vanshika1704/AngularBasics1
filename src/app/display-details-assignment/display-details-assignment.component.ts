import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details-assignment',
  templateUrl: './display-details-assignment.component.html',
  styles: [
    `
      .white-text {
        color: white;
      }
    `,
  ],
})
export class DisplayDetailsAssignmentComponent {
  showSecret = false;
  // log: number[] = [];
  log: Date[] = [];
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
