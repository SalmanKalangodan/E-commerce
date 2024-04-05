import { createSlice } from "@reduxjs/toolkit";
const initialState={
    Searchs:"",  //Searched Datas
    category:"" , //Category Datas
    Cart : false
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
        },
        Cart:(state,action)=>{
            state.Cart=action.payload
        }
    }

})

export const {Search ,Category , Cart} =SearchSlice.actions
export default SearchSlice.reducer 