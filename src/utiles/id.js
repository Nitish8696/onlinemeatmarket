import { createSlice } from "@reduxjs/toolkit";



const idSlice = createSlice({
    name: "id",
    initialState: {
        resId: '',
        address : {},
        searchTerm: '',
    },
    reducers: {
        addId: (state, action) => {
          state.resId = action.payload
        },
        addAddress : (state,action) => {
          state.address = action.payload
        },
        addSearchTerm : (state, action) => {
            state.searchTerm = action.payload
        }
    }
})

export const { addId,addAddress,addSearchTerm} = idSlice.actions;
export default idSlice.reducer;

