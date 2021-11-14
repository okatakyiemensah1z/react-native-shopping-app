import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TextInput, TouchableHighlight, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import products from '../requisites/products';

const HomeScreen = ({navigation}) => {

  const Card = ({products}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', products)}>
          
        <View style={{
           height: 225,
           backgroundColor: '#dbdad5',
           width: 150,
           marginHorizontal: 2,
           borderRadius: 10,
           marginBottom: 20,
           marginLeft: 15,
           marginRight: 15,
           padding: 19,
           alignContent: 'center'
          }}>

          <View>
            <Image
              source={{uri: products.image}}
              style={{height: 100, width: 120, borderRadius: 12}}
            />
          </View>

          <View>
          <Text style={{fontWeight: 'bold', fontSize: 10, marginTop: 10}}>
            {products.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              GHC {products.price}
            </Text>
          </View> 
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#ffffff'}}> 
     
      <View style={style.header}> 
       <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} style={{marginTop: 10}}/>

        <View style={{marginBottom: 20, flexDirection: 'row'}}>
          <View style={style.searchContainer}>
            <Icon name="search" size={25} style={{marginLeft: 20}} />
            <TextInput placeholder="Search" style={style.input} />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{marginTop: 10}}>
          <Icon name="shopping-cart" size={30} />
        </TouchableOpacity>   
      </View>
    
      <View>
      <FlatList
          contentContainerStyle={{
            marginTop: 10
          }}
        numColumns={2}
        data={products}
        renderItem={({item}) => {
          return <Card products={item}/>;
        }}
      />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: '#ffffff'.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#ffffff',
  },
  card: {
    height: 225,
    backgroundColor: '#ffffff',
    width: 150,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: '#dbdad5',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 50,
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: '#888888',
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;