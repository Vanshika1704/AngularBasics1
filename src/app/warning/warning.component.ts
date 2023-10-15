import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `<p>Styling the template</p>
    <h3>This is a warning Message</h3>`,
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class WarningComponent {}
