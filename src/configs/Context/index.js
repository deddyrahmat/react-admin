import {createContext, useReducer} from 'react';

export const AppContext = createContext();

const initialState = {
    search : '',
    name : '',
    auth : false,
    isLoading : true// cek ketersedian token
}

const reducer = (state, action)=> {
    const {payload, type} = action;

    switch (type) {
        case "SEARCH_PROGRAM":
            return{
                ...state,
                search : payload
            }

        default:
            throw new Error();
    }
}

export const AppContextProvider = (props) => {
    // state = initial state
    // dispatch = reducer

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}