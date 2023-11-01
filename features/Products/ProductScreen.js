import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { List } from 'react-native-paper';

const FeaturesRow = () => {
    return (
        <View style={[styles.row2]}>
            {/* <Button title="Detail" />
            <Button title="Add" />
            <Button title="Delete" /> */}
            <View style={styles.buttonContainer}>
                <View style={styles.buttonSpacing}>
                    <Button title="Detail" style={styles.button} onPress={() => console.log('Detail Pressed')} />
                </View>
                <View style={styles.buttonSpacing}>
                    <Button title="Add" style={styles.button} onPress={() => console.log('Add Pressed')} />
                </View>
                <View style={styles.buttonSpacing}>
                    <Button title="Delete" style={styles.button} onPress={() => console.log('Delete Pressed')} />
                </View>
            </View>
        </View>
    )
}

const ProductScreen = () => {

    const [data, setData] = React.useState([])
    const filePath = 'https://dummyjson.com/products';
    useEffect(() => {
        // Alert.alert(filePath);
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d.products);
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
    });

    return (
        <SafeAreaView>
            <Text style={{ color: 'black', fontSize: 23, margin: 30 }}>Products</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemProductContainer}>
                        <View style={styles.row}>
                            <Image
                                source={{ uri: item.thumbnail }}
                                style={{ width: 80, height: 80 }}
                            />
                            <View style={[styles.column, styles.aboutDataItem]}>
                                <Text style={[styles.text, styles.textHightLight]}>Title: {item.title}</Text>
                                <Text style={styles.text}>Description: {item.description}</Text>
                                <Text style={styles.text}>Price: ${item.price}</Text>
                                <Text style={[styles.text, styles.discountHightLight]}>Discount: {item.discountPercentage}%</Text>
                                <Text style={styles.text}>Rating: {item.rating}</Text>
                                <Text style={styles.text}>Stock: {item.stock}</Text>
                                <Text style={styles.text}>Brand: {item.brand}</Text>
                                <Text style={styles.text}>Category: {item.category}</Text>
                            </View>
                        </View>
                        <FeaturesRow />

                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    textHightLight: {
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        color: "black"
    },
    discountHightLight: {
        color: '#45b12f',
        fontWeight: 'bold',
    },
    itemProductContainer: {
        backgroundColor: '#f3f3f3',
        margin: 10,
        padding: 10,

    },
    column: {
        flex: 1,

    },
    aboutDataItem: {
        marginLeft: 18,
        marginRight: 8,
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    viewOfButtonFeatures: {
        marginLeft: 8,
        marginRight: 8
    },
    row2: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: 'flex-end',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 10,
    },
    buttonSpacing: {
        marginRight: 25,
    },
})