import {StyleSheet,Dimensions} from 'react-native';

const windows=Dimensions.get('window')
export default StyleSheet.create({
    container:{flex:1,
        flexDirection:'row',
        margin:5,
       borderWidth:1,
       borderColor:'#bdbdbd',
       borderRadius:55,
       backgroundColor:'#eceff1',
       borderBottomRightRadius:7,
       borderTopRightRadius:7
    },
   
    image:{ 
        width:windows.width/3,
        height:windows.height /6.5,
        resizeMode:'center',
        marginLeft:10
      
       
    },
    body_container:{
     backgroundColor:'#eceff1',
       flex:0 ,
       justifyContent:'center',
     
    },
    title:{
        fontSize:23,
        color:'black',
        margin:5
    },
})