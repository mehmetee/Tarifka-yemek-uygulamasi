import React from 'react'; '7.2K (gzipped:2.9K)'
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native';
import Styles from './CategoryCard.styles';


function CategoryCard({Categori,onSelect}){
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={Styles.container}>
            <Image  source={{uri:Categori.strCategoryThumb}}  style={Styles.image}/>
          
            <View style={Styles.body_container}>
            <Text style={Styles.title}>{Categori.strCategory}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
};

export default CategoryCard;