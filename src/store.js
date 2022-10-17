import { createSlice, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import watchSaga from './saga';


const dataSlice = createSlice({
    name: "Name",
    initialState: {
        fact: "",
        image: [],
    },
    reducers: {
        fetchData: (state, action) => {
            console.log(state, action)
            return {
                ...state,
                fact: action.payload
            };
        },
        fetchImage: (state, action) => {
            console.log(state, action)
            return {
                ...state,
                image: action.payload
            };
        }

    }
});

export const { fetchData, fetchImage } = dataSlice.actions;
console.log(dataSlice)

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        catFact: dataSlice.reducer,
        dog: dataSlice.reducer
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchSaga);

export default store;
