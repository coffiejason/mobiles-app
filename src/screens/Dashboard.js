import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../redux/data';
import Background from '../components/Background';
import CustomCarousel from '../components/Carousel';
import { StackActions } from '@react-navigation/native';

const exampleItems = [
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
];

export default function Dashboard({ navigation }) {
const data = useSelector((state) => state.data.data);
const dispatch = useDispatch();

useEffect(() => {
dispatch(setData([...exampleItems]));
}, [dispatch]);

const handlePress = () => {
navigation.dispatch(
StackActions.replace('DetailsScreen')
);
};

return (
<Background>
<CustomCarousel data={data} btnPressed={handlePress} />
</Background>
);
}
