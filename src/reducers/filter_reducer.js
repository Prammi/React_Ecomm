import { GiStarSattelites } from "react-icons/gi";
import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {

  if (action.type === LOAD_PRODUCTS) {
    let maxPrice=action.payload.map((p)=>{return p.price});
    maxPrice=Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters:{...state.filters,max_price:maxPrice,price:maxPrice}
     
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => {
      return  a.price - b.price;
      });
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => {
        return    b.price - a.price;
      });
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return   a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return   b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  if(action.type===FILTER_PRODUCTS){
    const {all_products}=state;
    let tempProducts =[...all_products];
    const {text,category,company,color,price,free_shipping} = state.filters;
    if(text){
      tempProducts=tempProducts.filter((product)=>{ return product.name.toLowerCase().startsWith(text)})
    }
    if(category!=='all'){
      tempProducts=tempProducts.filter((product)=>{return product.category.toLowerCase()===category.toLowerCase()})
    }
    if(company!=='all'){
      tempProducts=tempProducts.filter((product)=>{return product.company.toLowerCase()===company.toLowerCase()})
    }
    if(color!=='all'){
      tempProducts=tempProducts.filter((product)=>{ 
        return product.colors.find((c)=>c===color);
      })
    }
    if(free_shipping){
      tempProducts=tempProducts.filter((product)=>{return product.shipping===true;})
    }
   tempProducts=tempProducts.filter((product)=> product.price<=price);
    return {...state,filtered_products:tempProducts}
  }
  if (action.type === UPDATE_FILTERS) {
    const{name,value}=action.payload;
    return { ...state, filters:{...state.filters, [name]:value} };
  }
  if(action.type=== CLEAR_FILTERS){
  return {...state, 
    filters:{
      ...state.filters,
      text:'',
      company:'all',
      category:'all',
      color:'all',    
      free_shipping:false,
      price:state.filters.max_price      
      }
    }
  }
    return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
