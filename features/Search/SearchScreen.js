import { View, Text, SafeAreaView, Button, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Card } from 'react-native-paper';

const ItemSearch = ({ data }) => {
    return (
        <Card style={{ margin: 10 }}>
            <Card.Cover source={{ uri: data.images[0] }} />
            <View style={styles.column}>
                <Text style={[styles.itemTextColor, styles.hightLightTitle]}>Title: {data.title}</Text>
                <Text style={styles.itemTextColor}>Description: {data.description}</Text>
                <Text style={styles.itemTextColor}>Price: {data.price}</Text>
                <Text style={styles.itemTextColor}>Discount: {data.discountPercentage}</Text>
                <Text style={styles.itemTextColor}>Rating: {data.rating}</Text>
                <Text style={styles.itemTextColor}>Stock: {data.stock}</Text>
                <Text style={styles.itemTextColor}>Brand: {data.brand}</Text>
                <Text style={styles.itemTextColor}>Category: {data.category}</Text>
            </View>
        </Card>
    )
}

const SearchScreen = () => {

    const [search, setSearch] = useState("");
    const [searchList, setSearchList] = useState([]);

    let filePath = 'https://dummyjson.com/products';
    const searchProduct = () => {
        if (search != '')
            filePath = 'https://dummyjson.com/products/search?q=' + search; fetch(filePath)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                }).then((data) => {
                    console.log(data.products.length);
                    setSearchList(data.products)
                }).catch((error) => {
                    console.error('Error fetching data:', error);
                })
    }
    return (
        <SafeAreaView>
            <Text style={{ color: 'black', fontSize: 23, margin: 30 }}>Search Products</Text>
            <TextInput
                style={{ margin: 9 }}
                label={"Search Products"}
                placeholder={"Search Products"}
                value={search}
                onChangeText={(text) => setSearch(text)}
            />
            <Button title="Find" onPress={searchProduct} />
            <FlatList
                data={searchList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ItemSearch data={item} />
                )}
            ></FlatList>
        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    itemTextColor: {
        color: 'black'
    },
    column: {
        flexDirection: 'column',
        margin: 10
    },
    hightLightTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})