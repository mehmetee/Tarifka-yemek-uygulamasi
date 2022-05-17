import React from 'react'; '7.2K (gzipped:2.9K)'
import {View,Text,ScrollView,Image,TouchableOpacity,Linking} from 'react-native';
import useFetch from '../../Hooks/Hooks';
import Config from 'react-native-config';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import Styles from './Detail.Styles'

function Detail({route}){
const {strMeal}=route.params;
const {loading,data,error}=useFetch(Config.API_URL+`/search.php?s=${strMeal}`)

if (loading){
    return<Loading />
}
if (error){
    return<Error  />
}
    return (
        <ScrollView style={{backgroundColor:'white'}}>
        <View style={Styles.container}>
           
            <Image source={{uri:data.meals[0].strMealThumb}} style={Styles.image} />
            <View style={Styles.body_container}>
                <Text style={Styles.meal}>{data.meals[0].strMeal} </Text>
                <Text style={Styles.area}>{data.meals[0].strArea}</Text>
            </View>
            <Text style={Styles.instructions}>{data.meals[0].strInstructions}</Text>
            <TouchableOpacity style={Styles.buton} 
            onPress={()=>Linking.openURL(data.meals[0].strYoutube)}>
                <Text style={Styles.buton_Text}>Watch on Youtube</Text>
            </TouchableOpacity>
       
        </View>
        </ScrollView>
    )
};

export default Detail;