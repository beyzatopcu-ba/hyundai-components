import { createSlice } from '@reduxjs/toolkit';

// Örnek action
const action = {
    type: 'addProduct',
    payload: {
        id: 1,
        title: 'iPhone 9',
    }
}

// Örnek bir state
const CART_STATE = {
    '123': {
        title: 'iPhone 9',
        count: 0,
    }
}

const INITIAL_STATE = {};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addOneProduct: (state, action) => {
            console.log('state before', state);
            console.log('action', action);
            const product = action.payload;
            if (state[product.id]) {
                state[product.id].count++;
            }
            else {
                state[product.id] = {
                    ...product,
                    count: 1,
                }
            }
            console.log('state after', state);
        },
        removeOneProduct: (state, action) => {
            const product = action.payload;
            if (state[product.id]) {
                state[product.id].count--;
                if (state[product.id].count === 0) {
                    delete state[product.id];
                }
            }
        },
        clearCart: (state, action) => {
            return { ...INITIAL_STATE };
        }
    },
});
