import React from "react";
import { View , Text, Image} from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import styles from './styles';

const CoinDetailedHeader = () => {
    <View style={styles.HeaderContainer}>
            
            <Ionicons name="chevron-back-sharp" size={30} color="white" />
            <View style={styles.tickerContainer}>
                <Image source={{uri :small }} style={{width:25, height:25}}/>
                <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
                <View style={styles.rankContainer}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>#{market_cap_rank}</Text>
                </View>
            </View>
            <EvilIcons name="user" size={24} color="white" />

    </View>

}

export default CoinDetailedHeader;