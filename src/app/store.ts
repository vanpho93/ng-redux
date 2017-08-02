export interface IAppState {
    value: number;
    messages?: {
        maxCount: number;
    };
}

const rootReducer = (state: IAppState, action: { type: String }): IAppState => {
    return state;
};
