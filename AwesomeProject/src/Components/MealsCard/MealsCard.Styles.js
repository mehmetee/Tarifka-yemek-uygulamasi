import {StyleSheet, Dimensions} from 'react-native';

const windows=Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    
    },
    image:{
        width:windows.width/1.05,
        height:windows.height/3,
        borderRadius:13,
        flex:1,
        overflow:'scroll',
        flex:1
    },
    body_container:{
        flex:1,
        justifyContent:'flex-end',
      
    },
    title:{
         backgroundColor: "#00000999",
        fontSize:30,
        color:'white',
        textAlign:'center',
        paddingLeft:20,
        paddingRight:20,
        
    }, 

})