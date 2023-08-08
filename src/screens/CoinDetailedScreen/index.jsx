import React from 'react';
import { View } from 'react-native';
import Coin from '../../../assets/data/crypto.json'
import CoinDetailedHeader from './components/CoinDetailHeader/index';


const CoinDetailedScreen =() => {
    const {
        image : { small }, 
        name,
        symbol,
        market_data:{market_cap_rank},

    } = Coin
    return (
        <View>
            <CoinDetailedHeader/>
        </View>
    )
}

export default CoinDetailedScreen;