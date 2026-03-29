// Ruta: src/api/client.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// La IP de tu VPS en Miami con el puerto que configuramos (443)
const BASE_URL = 'http://144.172.111.116:443'; 

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Si el VPS no responde en 10s, cancela la petición
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Interceptor: Inyectar automáticamente el Token si existe
apiClient.interceptors.request.use(
  async (config) => {
    try {
      // Busca el token que guardaremos cuando el usuario se registre
      const token = await AsyncStorage.getItem('@user_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error obteniendo el token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
