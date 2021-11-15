import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function ProductDetails({navigation, route}){

    const products = route.params;

    return(
        // <ImageBackground source={require('../assets/bgImage1.jpg')} resizeMode='cover' imageStyle={{flex: 1}}>
        <View style={{flex: 1}}>
            <View style={{
                paddingHorizontal: 20,
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}> 
                <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()}/>
                <Icon name="shopping-cart" size={28} onPress={() => navigation.navigate('Cart')}/>
            </View>

            <View style={{
                marginTop: 10,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={{uri: products.image}} style={{
                    height: 250,
                    width: 220,
                    resizeMode: 'contain',
                    flex: 1
                }}/>
            </View>

            <View style={{
                flex: 0.55,
                marginTop: 20,
                backgroundColor: '#adaca6',
                marginHorizontal: 7,
                marginBottom: 7,
                borderRadius: 20,
                alignItems: 'center'
            }}> 
                <Text style={{marginTop: 20, textAlign: 'center', fontSize: 19, fontWeight: 'bold'}}>
                    <Text> {products.title} </Text>
                </Text>

                <View style={{marginTop: 20}}> 
                    <Text style={{textAlign: 'center', fontWeight: '500'}}> {products.description} </Text>
                </View>

                <View style={{borderRadius: 15, borderWidth: 0.6, padding: 10, marginTop: 25}}>
                    <TouchableOpacity> 
                        <Text> Add to Cart </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
            
        // </ImageBackground>
            );
}