let initialState={

    box_contents_list:[]

};



function reducer(state = initialState, action) {
    console.log(action)
    console.log(action.payload)

    // const {type,payload} = action

    switch (action.type) {
        case "DETAILBOX_CONTENTS":
            return {
                ...state, 
                    box_contents_list: [
                    ...state.box_contents_list,
                    {
                        word: action.payload.word,
                        mean: action.payload.mean,
                        ex: action.payload.ex,
                        interpret: action.payload.interpret,
                    },
                ],
            };
        default:
            return { ...state };
    }
}

export default reducer;