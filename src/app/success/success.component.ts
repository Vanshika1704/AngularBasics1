import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `<h3>This is a success Message</h3>`,
  styles: [
    `
      h3 {
        color: green;
      }
    `,
  ],
})
export class SuccessComponent {}
