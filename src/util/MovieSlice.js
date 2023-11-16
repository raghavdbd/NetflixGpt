import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({

    name:'movies',
    initialState:{},
    reducers:{
        addnowplayingmovie:(state,action) =>{
            state.nowplayingmovie=action.payload;
        }
       

    }
})
export const{addnowplayingmovie}=movieSlice.actions;
export default movieSlice.reducer
