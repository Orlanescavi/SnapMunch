import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Formulaire = ({ validerFormulaire }) => {
    const navigation = useNavigation();
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    const handleSubmit = () => {
        if (validerFormulaire(nom, prenom, email, motDePasse)) {
            navigation.navigate('LoadingScreen');
        } else {
            alert('Veuillez remplir tous les champs obligatoires.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nom</Text>
            <TextInput
                style={styles.input}
                value={nom}
                onChangeText={text => setNom(text)}
            />
            <Text style={styles.label}>Prénom</Text>
            <TextInput
                style={styles.input}
                value={prenom}
                onChangeText={text => setPrenom(text)}
            />
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
            />
            <Text style={styles.label}>Mot de Passe</Text>
            <TextInput
                style={styles.input}
                value={motDePasse}
                onChangeText={text => setMotDePasse(text)}
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={handleSubmit}
                style={{
                    width: 142,
                    height: 37,
                    backgroundColor: '#FFA500',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 80,
                }}
            >
                <Text style={{color: 'white'}}>
                    S'inscrire
                </Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    label: {
        color: '#FFA500',
        fontSize: 12,
        marginTop: 20,
    },
    input: {
        width: 240,
        borderBottomWidth: 1,
        borderColor: '#FFA500',
        padding: 5,
    },
});

export default Formulaire;
