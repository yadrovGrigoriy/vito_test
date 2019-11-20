export interface State {
    images: Image[];
}
export interface Image {
    title: string;
    url: string;
}

const initialState: State = {
    images: []
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case '':
            return {
                ...state,
                someFileld: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
