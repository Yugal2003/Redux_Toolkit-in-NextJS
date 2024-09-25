import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../slice/page';

const store = configureStore({
    reducer : {
        counter : counterSlice,
    }
})

export default store;