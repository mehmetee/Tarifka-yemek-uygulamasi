import React from 'react';
import LottiView from 'lottie-react-native';

function Error(){
    return(
        <LottiView source={require('../../asstes/error.json')} autoPlay loop />
    )
};
export default Error;