import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [
            {
                title: 'iPhone XS',
                image: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-xs-max-silver.png',
                Creator: 'Apple Inc',
            },
            {
                title: 'iPhone 12',
                image: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-red.png',
                Creator: 'Apple Inc',
            },
            {
                title: 'iPhone XR',
                image: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-xr-yellow.png',
                Creator: 'Apple Inc',
            },
            {
                title: 'iPhone 12 mini',
                image: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-12-mini-purple.png',
                Creator: 'Apple Inc',
            },
            {
                title: 'iPhone 11 Pro',
                image: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-11-pro-silver.png',
                Creator: 'Apple Inc',
            },
        ],
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;