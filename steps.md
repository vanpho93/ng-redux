Step 1: Install redux "ng2-redux" and "redux" 

Step 2: Create store.ts
    - Create interface IAppStore 
    - Create a root reducer function

Step 3: Import and write constructor function
    - Import 2 things from ng2-redux

    imports: [
        BrowserModule,
        NgReduxModule
    ]

    export class AppModule {
        constructor(ngRedux: NgRedux<IAppState>) {
            ngRedux.configureStore(rootReducer, INITIAL_STATE);
        }
    }

Step 4: Show data from store redux in template
    
    @select() value;            // in class
    <p>{{ value | async }}</p>  // in template

Step 5: Dispatch an action from component
    - Action in rootReducer
    - Import NgRedux to component and use it as a service
    - Call this.ngRedux.dispatch to dispatch actions
    - Remember that NgRedux is an generic type -> private ngRedux: ngRedux<IAppState>
    - Using select better:
    
        @select() value;
        @select(['messages', 'maxCount']) maxCount;
        @select((state: IAppState) => state.messages.maxCount) maxCoutArrow;
        