import React from 'react'; '7.2K (gzipped:2.9K)'
import {View,Text,ImageBackground,TouchableWithoutFeedback} from 'react-native';
import Styles from './MealsCard.Styles'
function MealsCard({Mealss,SelectToDetail}){
    return (
        <TouchableWithoutFeedback onPress={SelectToDetail}>
        <View style={Styles.container}>
        <ImageBackground style={Styles.image}  source={{uri:Mealss.strMealThumb}}>
        <View style={Styles.body_container}>
           <Text numberOfLines={1} style={Styles.title}>{Mealss.strMeal} </Text>
        </View>
        </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
    )
};

export default MealsCard;