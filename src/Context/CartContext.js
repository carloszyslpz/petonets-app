//import { createContext, useState } from "react";

//export const CartContext = createContext();

//export const CartProvider = ({ children }) => {
//const [cart, setCart] = useState([]);
//CHECAR ESTO
//const [enableCheckout, setEnableCheckout] = useState(false);

//const enable = useEffect(() => {
//if(cart.length === 0){
//setEnableCheckout(false)
//} else {
//setEnableCheckout(true)
//}
//},[cart])

//HASTA ACA

//let total = 0;
//cart.map((x) => (total = x.cant * x.price + total));

//let itemsPush = 0;
//cart.map((x) => (itemsPush = x.cant + itemsPush));

//const addToCart = (itemToAdd, cant) => {
//if (cart.some((e) => e.id === itemToAdd.id)) {
//let index = cart.findIndex((e) => e.id === itemToAdd.id);
//let product = cart[index];
//product.cant = product.cant + cant;

//const newCart = [...cart];
//newCart.splice(index, 1, product);
//setCart([...newCart]);
//} else {
//let product = { ...itemToAdd, cant };
//setCart([...cart, product]);
//}
//};

//const deleteItem = (id) => {
//const newCart = [...cart];
//let index = newCart.findIndex((e) => e.id === id);
//newCart.splice(index, 1);
//setCart([...newCart]);
//};

//return (
//<CartContext.Provider
//value={{ cart, deleteItem, addToCart, total, itemsPush, setCart }}
//>
//{children}
//</CartContext.Provider>
//);
//};

//export default CartProvider;
