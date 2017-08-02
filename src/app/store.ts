export interface IAppState {
    value: number;
    messages?: {
        maxCount: number;
    };
}

export const rootReducer = (state: IAppState, action: { type: String }): IAppState => {
    if (action.type === 'UP') return { ...state, value: state.value + 1 };
    if (action.type === 'DOWN') return { ...state, value: state.value - 1 };
    return state;
};

export const INITIAL_STATE = {
    value: 10,
    messages: {
        maxCount: 1000
    }
};
