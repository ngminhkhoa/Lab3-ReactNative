
import React, { useState } from 'react'
import ProductScreen from '../features/Products/ProductScreen';
import AddScreen from '../features/Add/AddScreen';
import SearchScreen from '../features/Search/SearchScreen';
import DetailScreen from '../features/Detail/DetailScreen';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MainScreen = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'ProductList', title: 'Product', focusedIcon: 'cart-variant' },
        { key: 'ProductAdd', title: 'Add', focusedIcon: 'cart-plus' },
        { key: 'ProductSearch', title: 'Search', focusedIcon: 'text-search' },
        { key: 'ProductDetail', title: 'Detail', focusedIcon: 'card-text-outline' },
    ])

    const renderScene = BottomNavigation.SceneMap({
        ProductList: ProductScreen,
        ProductAdd: AddScreen,
        ProductSearch: SearchScreen,
        ProductDetail: DetailScreen,
    });


    return (
        <SafeAreaProvider>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </SafeAreaProvider>
    )
}

export default MainScreen