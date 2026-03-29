// Ruta: App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importamos los colores globales
import { COLORS } from './src/theme/colors';

// Importaremos las pantallas aquí luego. Por ahora, creamos un "Placeholder".
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

// Pantalla temporal solo para verificar que la arquitectura funciona
const HomeScreenPlaceholder = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.background, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: COLORS.textPrimary, fontSize: 24, fontWeight: 'bold' }}>SaaS Forwarder</Text>
    <Text style={{ color: COLORS.accent, fontSize: 16, marginTop: 8 }}>Estado: Arquitectura Lista</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaProvider>
      {/* StatusBar configura los íconos del sistema (wifi, batería) en blanco (light) */}
      <StatusBar style="light" backgroundColor={COLORS.background} />
      
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // Escondemos el header nativo feo para hacer el nuestro personalizado luego
            headerShown: false, 
            contentStyle: { backgroundColor: COLORS.background },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreenPlaceholder} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
