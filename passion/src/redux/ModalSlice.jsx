import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({

    name: "contactModal",
    initialState: {
        isOpen: false,

    },

    reducers: {

        openModal: (state) => {

            state.isOpen = true;


        },

        closeModal: (state) => {

            state.isOpen = false;

           // console.log(state.isOpen);
            
        },
    },


    

});

export const { openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;