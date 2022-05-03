import React, {createContext, useReducer} from 'react';

const initialState = {color: 'red'};

const store = createContext(initialState);

const {Provider} = store;

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((curState, action) => {
        switch (action.type) {
            case 'SET_COLOR' :
            const newState = {
                color: action.payload,
            };
            return newState;
            default:
                throw new Error();
        }
    }, initialState);
    return <Provider value={{state, dispatch} }>{children }</Provider >;
};
export {store, StateProvider};