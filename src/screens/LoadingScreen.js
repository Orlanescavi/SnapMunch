import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Logo from '../img/Logo.png';

const LoadingScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(()=> {
            navigation.navigate('Boutique')
        }, 3000);
    }, []);

    return(
        <View style={styles.container}>
            <Image style={styles.logoContainer} source={Logo}/>
            <ActivityIndicator 
                style={{
                    margin: 20,
                }}
                animating={true}
                size="large"
                color="white"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA500',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        width: 186.35,
        height: 242,
    }
});

export default LoadingScreen;