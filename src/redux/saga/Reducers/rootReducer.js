import { combineReducers } from "redux";
import InfoReducer from "./InfoReducer";
import productModalReducer from '../../product-modal/productModalSlice'
import cartItemsReducer from '../../shopping-cart/cartItemsSlide';

const rootReducer = combineReducers({
    productModal: productModalReducer,
    cartItems: cartItemsReducer,
    InfoReducer: InfoReducer,
});
    
export default rootReducer;