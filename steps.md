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
