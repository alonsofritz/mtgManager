import React from 'react';
import { View, Text, Image } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles';

function Home() {
    return (
        <View style={styles.container}>
            <Image source={logo} />
            <Text style={styles.mtgTitle}>HOME - MTG Manager</Text>
        </View>
    );
}

export default Home;