import { createSlice } from '@reduxjs/toolkit'
import { StoreProduct } from '../../../type';

     interface NextState {
    ProductData:StoreProduct[];
    FavoriteData:StoreProduct[];
    AllProducts:StoreProduct[];
    UserInfo:null|string;
}

const initialState:NextState={
  ProductData:[],
  FavoriteData:[], 
  AllProducts:[],
  UserInfo:null
}

export const NextSlice = createSlice({
  name: 'Next',
  initialState,
  reducers: {
      addToCart:(state,action)=>{
        const existingProduct=state.ProductData.find((item)=>item.id===action.payload.id);
        if(existingProduct){
          existingProduct.quantity +=action.payload.quantity
        }else{state.ProductData.push(action.payload)}
      },
      addToFavorite:(state,action)=>{
        const existingProduct=state.FavoriteData.find((item)=>item.id===action.payload.id);
        if(existingProduct){
          existingProduct.quantity +=action.payload.quantity
        }else{state.FavoriteData.push(action.payload)}
      },
      removeFavorite:(state,action)=>{
        state.FavoriteData = state.FavoriteData.filter((item)=>item.id!==action.payload)
      },
      increaseQuantity:(state,action)=>{
        const existingProduct=state.ProductData.find((item)=>item.id===action.payload.id);
         existingProduct && existingProduct.quantity++;
      },
      decreaseQuantity:(state,action)=>{
        const existingProduct=state.ProductData.find((item)=>item.id===action.payload.id);
        if(existingProduct?.quantity===1){
          existingProduct.quantity=1
        }else{existingProduct!.quantity--;}
      },
      removeProduct:(state,action)=>{
        state.ProductData = state.ProductData.filter((item)=>item.id!==action.payload)
      },
      resetCart:(state,action)=>{
        state.ProductData=action.payload
      },
      addUser:(state,action)=>{
        state.UserInfo = action.payload
      },
      removeUser:(state,action)=>{
          state.UserInfo = action.payload;
      }
  },
})

export const {addToCart,addToFavorite,removeFavorite,increaseQuantity,decreaseQuantity,removeProduct,resetCart,addUser,removeUser } = NextSlice.actions

export default NextSlice.reducer