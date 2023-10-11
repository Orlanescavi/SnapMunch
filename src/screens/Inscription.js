import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Back from '../img/back.png';
import SnapMunch from '../img/SnapMunch.png';
import Formulaire from './Formulaire';

const Inscription = () => {
    const navigation = useNavigation();

    const validerFormulaire = (nom, prenom, email, motDePasse) => {
        return nom.trim() !== '' && prenom.trim() !== '' && email.trim() !== '' && motDePasse.trim() !== '';
    };

    return (
        <View style={styles.container}>
            <View style={styles.backContainer}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Accueil')}}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image style={styles.Back} source={Back}/>
                </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
                <Image style={styles.Logo} source={SnapMunch}/>
                <TouchableOpacity
                    style={{
                        margin: 40,
                        width: 142,
                        height: 37,
                        backgroundColor: 'white',
                        borderColor: '#FFA500',
                        borderWidth: 2,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: '#FFA500'
                        }}
                    >
                        Se connecter
                    </Text>
                </TouchableOpacity>
                <Formulaire validerFormulaire={validerFormulaire} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backContainer: {
        margin: 30,
        width: 40,
        height: 38,
        backgroundColor: '#FFA500',
        borderRadius: 15,
    },
    Back: {
        width: 25,
        height: 25,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        width: 66.23,
        height: 86,
    }
});

export default Inscription;
