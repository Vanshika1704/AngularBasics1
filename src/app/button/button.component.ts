import { Component } from '@angular/core';
@Component({
  selector: 'app-button',
  template: `<p>Like button example</p>
    <div>
      <button
        (click)="likeButtonClick()"
        [ngClass]="chooseclassl ? 'like-button' : 'liked'"
      >
        Like | {{ numberOfLikes }}
      </button>
    </div> `,
})
export class ButtonComponent {
  numberOfLikes: number = 100;

  chooseclassl: boolean = true;

  likeButtonClick() {
    if (this.chooseclassl === true) {
      this.numberOfLikes++;
      this.chooseclassl = false;
    } else if (this.chooseclassl === false) {
      this.numberOfLikes--;
      this.chooseclassl = true;
    }
  }
}
