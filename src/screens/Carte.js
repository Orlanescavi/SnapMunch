// Import des modules et images

import React from "react";
import { StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Menu from '../img/Menu.png';
import Boisson from '../img/boisson.png';
import Hamburger from '../img/hamburger.png';
import Salade from '../img/salade.png';
import Snacks from '../img/snacks.png';
import Glace from '../img/glace.png';

const Carte = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.card} onClick={() => {navigation.navigate('Produit')}}>
                    <Image
                    style={{
                        width: 113,
                        height: 84,
                    }}
                    source={Menu}
                    />
                    <Text style={{color: '#7B5E29', fontWeight: 'bold'}}>Menu</Text>
                </View>
                <View style={styles.card}>
                    <Image
                    style={{
                        width: 64,
                        height: 94,
                    }}
                    source={Boisson}
                    />
                    <Text style={{color: '#7B5E29', fontWeight: 'bold'}}>Boisson</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Image
                    style={{
                        width: 101,
                        height: 74,
                    }}
                    source={Hamburger}
                    />
                    <Text style={{color: '#7B5E29', fontWeight: 'bold'}}>Hamburger</Text>
                </View>
                <View style={styles.card}>
                    <Image
                    style={{
                        width: 102,
                        height: 90,
                    }}
                    source={Salade}
                    />
                    <Text style={{color: '#7B5E29', fontWeight: 'bold'}}>Salade</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Image
                    style={{
                        width: 127,
                        height: 97,
                    }}
                    source={Snacks}
                    />
                    <Text style={{color: '#7B5E29', fontWeight: 'bold'}}>Snaks</Text>
                </View>
                <View style={styles.card}>
                    <Image
                    style={{
                        width: 91,
                        height: 68,
                    }}
                    source={Glace}
                    />
                    <Text style={{color: '#7B5E29', fontWeight: 'bold'}}>Dessert</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 141,
        height: 141,
        borderColor: '#B68835',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
});

export default Carte;