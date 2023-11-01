import { View, Text, SafeAreaView, ScrollView, Button, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';

const AddScreen = () => {
    const [product, setProduct] = React.useState({
        title: null,
        description: null,
        price: 0,
        discount: 0,
        rating: 0,
        stock: 0,
        brand: null,
        category: '',
        images: null,
    });

    const handleInputChange = (key, value) => {
        setProduct({
            ...product,
            [key]: value,
        });
    };

    handleSubmit = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                title: product.title,
                description: product.description,
                price: product.price,
                discountPercentage: product.discount,
                rating: product.rating,
                stock: product.stock,
                brand: product.brand,
                category: product.category,
                images: product.images,
            }),
        }).then((res) => res.json())
            .then(console.log);
        Alert.alert("Add sucessfull")
    };


    const textInputs = [
        { key: 'title', label: 'Title', value: product.title },
        { key: 'description', label: 'Description', value: product.description },
        { key: 'price', label: 'Price', value: product.price.toString() },
        { key: 'discount', label: 'Discount', value: product.discount.toString() },
        { key: 'rating', label: 'Rating', value: product.rating.toString() },
        { key: 'stock', label: 'Stock', value: product.stock.toString() },
        { key: 'brand', label: 'Brand', value: product.brand },
        { key: 'category', label: 'Category', value: product.category },
        { key: 'images', label: 'Images', value: product.images },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: 'black', fontSize: 23, margin: 30 }}>Add Product</Text>
            <ScrollView>
                {textInputs.map((textInput) => (
                    <TextInput
                        style={{ margin: 9 }}
                        key={textInput.key}
                        label={textInput.label}
                        placeholder={textInput.label}
                        value={textInput.value}
                        onChangeText={(text) => handleInputChange(textInput.key, text)}
                    />
                ))}
                <Button title="Save" onPress={handleSubmit} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});