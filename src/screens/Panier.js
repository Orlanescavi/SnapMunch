import React from 'react';
import { useState, useContext } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePanier } from './PanierContext';

import Back from '../img/back.png';
import Basket from '../img/panier.png';
import PanierVide from '../img/panierVide.png';
import Menu from '../img/MenuBig.webp';
import Delete from '../img/poubelle.png';

const Panier = () => {
    const navigation = useNavigation();
    const { contenuPanier, supprimerDuPanier, nombreDeMenusDansPanier } = usePanier();

    let message = '';

    if (contenuPanier.length === 0) {
        message = "Le panier est vide";
    }

    const handleDelete = (index) => {
        supprimerDuPanier(index);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View onClick={() => { navigation.navigate('Boutique') }}>
                    <Image style={styles.Back} source={Back} />
                </View>
                <Image style={styles.Panier} source={Basket} />
            </View>
            {message !== '' &&
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.panierVide} source={PanierVide} />
                    <Text
                        style={{
                            fontSize: 15,
                            color: '#737373',
                            margin: 30
                        }}
                    >
                        {message}
                    </Text>
                </View>
            }
            {contenuPanier.length > 0 &&
            <View style={{flexDirection: 'row' , justifyContent: 'center', alignItems: 'center', margin: 25}}>
                <View
                style={{
                    backgroundColor: '#EBEAEA',
                    width: 341,
                    height: 96,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems:'center'
                }}
                >
                    {contenuPanier.map((element, index) => (
                    <View style={{flexDirection: 'row', position: 'absolute', left: 0, margin: 20}} key={index}>
                        <Image source={Menu} style={{width: 90, height: 90}}/>
                        <View>
                            <Text style={{margin: 10, fontWeight: "bold", fontSize: 15}}>{element}</Text>
                            <Text style={{color: '#B1AAAA', margin: 10}}>{nombreDeMenusDansPanier} {element}</Text>
                        </View>
                        <View onClick={() => handleDelete(contenuPanier)} style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginLeft: 50}}>
                            <Image style={styles.poubelle} source={Delete}/>
                        </View>
                    </View>
                    ))}
                </View>
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFDFDF',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        backgroundColor: '#FFA500',
        borderBottomLeftRadius: 44,
        borderBottomRightRadius: 44,
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Back: {
        width: 25,
        height: 25,
        margin: 25,
    },
    Panier: {
        width: 25,
        height: 25,
        margin: 25,
    },
    panierVide: {
        width: 50,
        height: 50,
    },
    poubelle: {
        width: 33,
        height: 33,
    }
});

export default Panier;
