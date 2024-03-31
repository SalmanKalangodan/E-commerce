import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "../SearchSlice/SearchSlice";
import ApiSlice from "../ApiSlice/ApiSlice";

export const store = configureStore({
    reducer:{
      SearchSlice,  //Search and Category Datas
      ApiSlice,  //All API Calls 
    }
})