import React from "react"; 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from './pages/Categories/categories';
import Meals from './pages/Meals/Meals';
import Detail from './pages/Detail/Detail';



const Stack= createNativeStackNavigator();


function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="CategoriPAge"  component={Categories}
                options={{ title:'Categories', headerTitleAlign:'center',
                    headerTitleStyle:{color:'#ffa500',fontSize:29,fontWeight:'bold'}
            }}
                />
                <Stack.Screen name="MealsPage"  component={Meals}
                    options={{ title:'Meals', headerTitleAlign:'center',
                    headerTitleStyle:{color:'#ffa500',fontSize:29,fontWeight:'bold'}
                  }}
                 />
                <Stack.Screen name="DetailPage"  component={Detail}
                 options={{ title:'Detail', headerTitleAlign:'center',
                 headerTitleStyle:{color:'#ffa500',fontSize:29,fontWeight:'bold'}
               }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;