import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { usePanier } from './PanierContext';

const Compteur = () => {
    const [number, setNumber] = useState(1);

    const handleIncrementation = () => {
        setNumber(number + 1);
    }

    const handleDecrementation = () => {
        setNumber(number - 1);
    }

    return(
        <View style={styles.compteurContainer}>
          <TouchableOpacity onPress={handleDecrementation}>
            <Text style={{ fontSize: 15 }}>-</Text>
          </TouchableOpacity>
        <TextInput
          value={number.toString()}
          keyboardType="numeric"
          onChangeText={(text) => setNumber(parseInt(text) || 0)}
          style={{ fontSize: 15, textAlign: 'center', width: 40, fontWeight: 'bold' }}
        />
        <TouchableOpacity onPress={handleIncrementation}>
          <Text style={{ fontSize: 15 }}>+</Text>
        </TouchableOpacity>
      </View>
    )
};

const styles = StyleSheet.create({
  compteurContainer: {
    flexDirection: 'row',
    width: 102,
    height: 44,
    margin: 25,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#7B7B7B',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Compteur;