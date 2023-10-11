import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Back from '../img/Back.png';
import Panier from '../img/Panier.png';
import imgBoutique from '../img/img-Boutique.png';
import Info from '../img/info.png';

import Carte from './Carte';

const Boutique = () => {
    const navigation = useNavigation();

    return(
        <ImageBackground
        style={styles.container}
        source={imgBoutique}
        >
            <View 
                style={styles.backContainer}
                onClick={() => {navigation.navigate('Accueil')}}
            >
                <Image style={styles.Back} source={Back}/>
            </View>
            <View style={styles.panierContainer}
            onClick={() => {navigation.navigate('Panier')}}
            >
                <Image style={styles.Panier} source={Panier}/>
                <View style={styles.bulle}></View>
            </View>
            <View style={styles.infoContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.Info} source={Info} />
            <View style={{ marginLeft: 8 }}>
                <Text style={{ color: 'white', fontSize: 8 }}>
                    Profitez d'une Remise Spéciale
                </Text>
                <Text style={{ color: '#B7811E', fontSize: 5, width: 146, marginTop: 5 }}>
                    Remise spéciale de 15% sur votre prochaine commande ! Utilisez le code
                    promo : SNAP15 lors du paiement pour bénéficier de cette offre exclusive.
                </Text>
            </View>
            </View>
            </View>
            <Carte/>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: "auto",
        height: 220,
    },
    backContainer : {
        margin: 30,
        width: 40,
        height: 38,
        backgroundColor: '#FFA500',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Back: {
        width: 25,
        height: 25,
    },
    panierContainer: {
        margin: 20,
        position: 'absolute',
        top: 0,
        right: 0,
        width: 51,
        height: 48,
        backgroundColor: '#FFA500',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Panier: {
        width: 33,
        height: 32,
    },
    bulle: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 13,
        height: 13,
        backgroundColor: '#F35555',
        borderRadius: 10,
        paddingHorizontal: 3,
    },
    infoContainer: {
        position: 'absolute',
        top: 190,
        left: '50%',
        marginLeft: -114,
        backgroundColor: '#FFA500',
        width: 228,
        height: 55,
        borderRadius: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    Info: {
        width: 27,
        height: 27,
        margin: 15,
    }
});

export default Boutique;
