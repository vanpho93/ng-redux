export interface IAppState {
    value: number;
    messages?: {
        maxCount: number;
    };
}

export const rootReducer = (state: IAppState, action: { type: String }): IAppState => {
    return state;
};

export const INITIAL_STATE = {
    value: 10
};
