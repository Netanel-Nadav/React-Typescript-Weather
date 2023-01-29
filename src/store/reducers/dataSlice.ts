enum DataActionTyps {
    SET_SEARCH_TERM = 'SET_SEARCH_TERM'
}


interface ActionType {
    type: DataActionTyps,
    payload: 'string'
}


interface DataState {
    data: any
    searchTerm: string
}


const initialState: DataState = {
    data: null,
    searchTerm: ""
}


const dataReducer = (state = initialState , action: ActionType) => {
    switch (action.type) {
        case DataActionTyps.SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload }

        default:
            return state
    }
}





export { dataReducer, DataActionTyps }