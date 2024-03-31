import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//Get All Products 
export const GetProducts= createAsyncThunk("GetItem" , async ()=>{
    const ref=  await axios.get(`http://localhost:3000/products`);
        return ref.data
})
//Get All Users
export const GetUsers = createAsyncThunk("GetUser", async () =>{
    const ref = await axios.get('http://localhost:3000/users')
    return ref.data
} )
//Get User With Using Id
export const GetUserId = createAsyncThunk('GetUserId', async (uid) =>{
   const ref = await axios.get(`http://localhost:3000/users/${uid}`)
   return ref.data
})
//Post Users In Registraion
export const PostUser = createAsyncThunk('Postuser', async ({firstname,phone,email,password,Cart,block})=>{
    await axios.post(`http://localhost:3000/users`, {firstname,phone,email,password,Cart,block}).then(alert('success'))
})
//Add Product To Cart
export const AddCart = createAsyncThunk ('AddCart' ,async ({uid , cart,carts})=>{
    await  axios.patch(`http://localhost:3000/users/${uid}`,{ ...cart, Cart: carts })
     .then(alert("Added"))
})
//Remove Product From The Cart
export const RemoveCart = createAsyncThunk("RemoveCart" , async ({ uid , datas , cart})=>{
      await axios.patch(`http://localhost:3000/users/${uid}`,{...datas, Cart: cart })
      .then(alert('remove')).then(window.location.reload())
})
//Block And UnBlock User
export const BlockUser = createAsyncThunk('BlockUser', async (value)=>{
    const  newValue ={...value,block :!value.block}
    axios.put(`http://localhost:3000/users/${value.id}`, { ...newValue }).then(alert('Blocked')).then(window.location.reload())
})
//Add Products Admin Said
export const AddProducts = createAsyncThunk ('AddProducts', async ({ name, price, img, discretion, category }) =>{
    await   axios.post('http://localhost:3000/products', { name, price, img, discretion, category }).then(alert('Posted')).then(() => {
        window.location.reload()
      })
})
//Edit Product Adimin Said
export const EditProduct =createAsyncThunk('EditProduct',async ({ Proid, name, price, img, discretion, category })=>{
    await  axios.patch(`http://localhost:3000/products/${Proid}`, { name, price, img, discretion, category }).then(alert('Edited'))
})
//Get Products Using Id 
export const GetProductsId =createAsyncThunk('GetProductsId' , async (Pid)=>{
      const ref = await axios.get(`http://localhost:3000/products/${Pid}`)
      return ref.data
})