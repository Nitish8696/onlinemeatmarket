import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        total: 0,
    },
    reducers: {
        deleteProductFromCart: (state, action) => {
            const { productId } = action.payload;
            const newCart = state.products.filter(product => {
                return product._id !== productId
            })
            return {
                ...state,
                products: newCart,
                total: calculateTotal(newCart)
            }
            function calculateTotal(products) {
                return products.reduce((acc, product) => {
                    return acc + (product.price.price * product.quantity);
                }, 0);
            }
        },
        addProductToCart: (state, action) => {
            const { productId, weight } = action.payload;
            const index = state.products.findIndex(product => {
                return product._id === productId && product.price.weight === weight;
            });
            if (index !== -1) {
                const updatedProducts = [...state.products];

                const updatedProduct = updatedProducts[index];

                updatedProducts[index] = {
                    ...updatedProduct,
                    quantity: updatedProduct.quantity + 1
                };

                return {
                    ...state,
                    products: updatedProducts,
                    total: calculateTotal(updatedProducts)
                };
            }
            function calculateTotal(products) {
                return products.reduce((acc, product) => {
                    return acc + (product.price.price * product.quantity);
                }, 0);
            }
        },
        removeProductFromCart: (state, action) => {
            const { productId, weight } = action.payload;
            const index = state.products.findIndex(product => {
                return product._id === productId && product.price.weight === weight;
            });
            if (index !== -1) {
                const updatedProducts = [...state.products];

                const updatedProduct = updatedProducts[index];

                if (updatedProduct.quantity > 1) {
                    updatedProducts[index] = {
                        ...updatedProduct,
                        quantity: updatedProduct.quantity - 1
                    };
                }

                return {
                    ...state,
                    products: updatedProducts,
                    total: calculateTotal(updatedProducts)
                };
            }
            function calculateTotal(products) {
                return products.reduce((acc, product) => {
                    return acc + (product.price.price * product.quantity);
                }, 0);
            }
        },
        addProduct: (state, action) => {
            console.log(action.payload)
            const index = state.products.findIndex(product => {
                return product._id === action.payload.productwithprice._id && product.price.weight ===
                    action.payload.productwithprice.price.weight;
            });
            if (index !== -1) {
                const updatedProducts = [...state.products];

                const updatedProduct = updatedProducts[index];

                updatedProducts[index] = {
                    ...updatedProduct,
                    quantity: updatedProduct.quantity + action.payload.productwithprice.quantity
                };


                return {
                    ...state,
                    products: updatedProducts,
                    total: calculateTotal(updatedProducts)
                };
            }
            else {
                state.products.push(action.payload.productwithprice)
                state.total += action.payload.productwithprice.price.price * action.payload.quantity
            }

            function calculateTotal(products) {
                return products.reduce((acc, product) => {
                    return acc + (product.price.price * product.quantity);
                }, 0);
            }
        }
    }
})

export const { addProduct, addProductToCart, removeProductFromCart, deleteProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;