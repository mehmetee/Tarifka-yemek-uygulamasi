import React from 'react'; '7.2K (gzipped:2.9K)'
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import useFetch from '../../Hooks/Hooks';

function Categorie({navigation}){
const{loading ,data,error}= useFetch(Config.API_URL+ "/categories.php")

function gitMeals(strCategory){
  navigation.navigate('MealsPage',{strCategory})
}

 const cekveri = ({item}) => 
  <CategoryCard Categori={item} onSelect={()=> gitMeals(item.strCategory)} />

if(loading){
 return <Loading />
}
if (error){
 return <Error />
}

    return   <FlatList style={{backgroundColor:'#ffa500'}} 
    data={data.categories}  renderItem={cekveri}/>
     
      
};

export default Categorie;
