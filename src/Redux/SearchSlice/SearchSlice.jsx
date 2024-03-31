import { createSlice } from "@reduxjs/toolkit";
const initialState={
    Searchs:"",  //Searched Datas
    category:""  //Category Datas
}

export const SearchSlice =createSlice({
    name:'search',
    initialState,
    reducers:{
        Search:(state,action)=>{
             state.Searchs=action.payload
        },
        Category:(state,action)=>{
            state.category=action.payload
        }
    }

})

export const {Search ,Category} =SearchSlice.actions
export default SearchSlice.reducer 