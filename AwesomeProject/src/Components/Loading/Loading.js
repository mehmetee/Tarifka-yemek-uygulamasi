import React from 'react';
import LottiView from 'lottie-react-native';

function Loading(){
    return(
        <LottiView source={require('../../asstes/loading.json')} autoPlay loop />
    )
};
export default Loading;