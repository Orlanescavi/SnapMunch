import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Accueil from './src/screens/Accueil.js';
import Inscription from './src/screens/Inscription.js';
import LoadingScreen from './src/screens/LoadingScreen.js';
import Boutique from './src/screens/Boutique.js';
import Produit from './src/screens/Produit.js';
import Panier from './src/screens/Panier.js';
import { PanierProvider } from './src/screens/PanierContext.js';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <PanierProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
                    <Stack.Screen name='Produit' component={Produit} />
          <Stack.Screen name='Accueil' component={Accueil} />
          <Stack.Screen name='Inscription' component={Inscription} />
          <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
          <Stack.Screen name='Boutique' component={Boutique} />
          <Stack.Screen name='Panier' component={Panier} />
        </Stack.Navigator>
      </NavigationContainer>
    </PanierProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
