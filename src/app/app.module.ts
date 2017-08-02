import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
