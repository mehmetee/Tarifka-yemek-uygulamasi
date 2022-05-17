import React from 'react'; '7.2K (gzipped:2.9K)'
import {FlatList,Text} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../Hooks/Hooks';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import MealsCard from '../../Components/MealsCard/MealsCard';
function Meals({route,navigation}){
    const {strCategory} = route.params
    const {loading,data,error}=useFetch(Config.API_URL+`/filter.php?c=${strCategory}`)
    


function gitDetail(strMeal){
    navigation.navigate("DetailPage",{strMeal})
}

   if (loading){
       return <Loading />
   } 
   if(error){
       return <Error />
   }
    const Mealscekveri=({item})=> 
    <MealsCard Mealss={item} SelectToDetail={()=>gitDetail(item.strMeal)}/>

    return <FlatList style={{backgroundColor:'#ffa500'}}
     data={data.meals}  renderItem={Mealscekveri}/>
};

export default Meals;