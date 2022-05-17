import {StyleSheet,Dimensions} from 'react-native';

const windows=Dimensions.get('window')
export default StyleSheet.create({
    container:{},
    image:{ 
        width:devicesize.width,
        height:devicesize.height /3,
        resizeMode:'contain',
        backgroundColor:'white',
       
    },
    body_container:{backgroundColor:'white' },
    title:{ },
})