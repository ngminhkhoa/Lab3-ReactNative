import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-native-paper';

const CardDetail = ({ data }) => {
    console.log(data);
    const isImageNotNull = data.images && data.images.length > 0;
    return (
        <Card style={{ margin: 10 }}>
            {isImageNotNull && (
                <Card.Cover source={{ uri: data.images[0] }} />
            )}
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
            <View style={styles.buttonContainer}>
                <View style={styles.buttonSpacing}>
                    <Button title="Delete" style={styles.button} onPress={() => console.log('Delete Pressed')} />
                </View>
                <View style={styles.buttonSpacing}>
                    <Button title="Cancel" style={styles.button} onPress={() => console.log('Cancel Pressed')} />
                </View>
            </View>
        </Card>
    )
}

const DetailScreen = () => {
    const [data, setData] = useState({})
    const filePath = 'https://dummyjson.com/products/2';
    useEffect(() => {
        // Alert.alert(filePath);
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])
    return (
        <View style={styles.container}>
            <Text style={{ color: 'black', fontSize: 23, margin: 30 }}>Detail Product</Text>
            <CardDetail data={data} />
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
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
    },
    buttonView: {
        width: 30,
        color: "black"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 10,
    },
    buttonSpacing: {
        marginRight: 10,
    },
})