import { Component } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ value | async }}</p>
    <p>{{ maxCount | async }}</p>
    <p>{{ maxCoutArrow | async }}</p>
    <button (click)="up();">UP</button>
    <button (click)="down();">DOWN</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ngRedux: NgRedux<IAppState>) {}
  @select() value;
  @select(['messages', 'maxCount']) maxCount;
  @select((state: IAppState) => state.messages.maxCount) maxCoutArrow;
  up() {
    this.ngRedux.dispatch({ type: 'UP' });
  }
  down() {
    this.ngRedux.dispatch({ type: 'DOWN' });
  }
}
