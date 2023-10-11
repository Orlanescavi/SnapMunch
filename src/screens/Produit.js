import React, { useContext } from 'react'; 
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePanier } from './PanierContext';

import Compteur from './Compteur';

import Menu from '../img/MenuBig.webp';
import Back from '../img/back.png';
import Like from '../img/like.png';
import Position from '../img/position.png';

const Produit = () => {
    const navigation = useNavigation();
    const { ajouterAuPanier } = usePanier(); 

    const handleAdd = () => {
        ajouterAuPanier("Menu Savoureux");
    }

    return(
        <View style={styles.container}>
            <View 
                style={styles.backContainer}
                onClick={() => {navigation.navigate('Boutique')}}
            >
                <Image style={styles.Back} source={Back}/>
            </View>
            <View style={styles.likeContainer}>
                <Image style={styles.Like} source={Like}/>
            </View>
            <View style={{flex: 1, justifyContent: ' center', alignItems: 'center'}}>
                <Image style={styles.Menu} source={Menu}/>
            </View>
            <View
            style={{
                backgroundColor: 'white',
                width: "auto",
                height: 426,
                borderTopEndRadius: 40,
                borderTopStartRadius: 40,
            }}
            >
                <Text
                style={{
                    margin: 25,
                    color: '#7B7B7B',
                    fontWeight: 'bold',
                }}
                >
                    SnapMunch, fast food
                </Text>
                <View style={{flexDirection: 'row', marginLeft: 25, alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 25}}>Menu Savoureux</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 30, margin: 10, position: 'absolute', right: 0}}>9,80 €</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.Position} source={Position}/>
                    <Text style={{color: '#7B7B7B', fontWeight: 'bold'}}>Paris - France</Text>
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 20, margin: 25}}>Lorem Ipsum</Text>
                <Text style={{width: 345, fontSize: 8, color: '#7B7B7B', marginLeft: 25, textAlign: 'justify'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare varius tincidunt.
                Fusce quis ligula odio. Proin accumsan lectus id porttitor tristique. Vivamus consequat
                dapibus sem ac porta. Integer non magna sed neque aliquam ornare. Ut sit amet aliquet
                ante, in interdum elit. Morbi ipsum lectus, consequat sed rhoncus sit amet, dapibus a
                eros.
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Compteur/>
                    <TouchableOpacity
                    style={{
                        margin: 60,
                        backgroundColor: '#FFA500',
                        width: 127,
                        height: 44,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}
                    onPress={handleAdd}
                    >
                        <Text style={{ color: 'white', fontSize: 10 }}>Ajouter au panier</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA500',
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
    likeContainer : {
        margin: 30,
        position: 'absolute',
        top: 0,
        right: 0,
        width: 33,
        height: 33,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Like: {
        width: 19,
        height: 19,
    },
    Menu: {
        width: 303,
        height: 225.24,
    },
    Position: {
        margin: 25,
        width: 15,
        height: 15,
    }
});

export default Produit;
