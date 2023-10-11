import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../img/Logo.png';

const Accueil = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.Logo} source={Logo}/>
                <Text style={styles.Text}>Connexion à votre compte SnapMunch</Text>
                <TouchableOpacity
                    style={{
                        width: 213,
                        height: 40,
                        backgroundColor: 'white',
                        borderColor: '#FFA500',
                        borderWidth: 1,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: '#FFA500',
                        }}
                    >
                        Se connecter
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> {
                        navigation.navigate('Inscription');
                    }}
                    style={{
                        margin: 20,
                        width: 213,
                        height: 40,
                        backgroundColor: '#FFA500',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                        }}
                    >
                        S'inscrire
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        width: 186.35,
        height: 242,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    Text: {
        width: 340,
        margin: 60,
        color: '#FFA500',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },
});

export default Accueil;