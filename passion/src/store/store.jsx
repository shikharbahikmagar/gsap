import { configureStore } from "@reduxjs/toolkit";
import  modalReducer  from "../redux/ModalSlice";

const store = configureStore({

    reducer:  modalReducer

});

export default store;