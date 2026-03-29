// Ruta: src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ShieldAlert, Zap } from 'lucide-react-native'; // Íconos
import { COLORS } from '../theme/colors';
import PrimaryButton from '../components/atoms/PrimaryButton';

export default function HomeScreen() {
  // Simulamos datos que luego vendrán de tu base de datos SQLite
  const isPro = false; 
  const userToken = "tk_1a2b3c4d5e6f";

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>SMS Forwarder</Text>
        <View style={[styles.badge, isPro ? styles.badgePro : styles.badgeFree]}>
          <Text style={styles.badgeText}>{isPro ? 'PRO ACTIVADO' : 'PLAN GRATIS'}</Text>
        </View>
      </View>

      {/* Tarjeta de Estado del Servicio */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <ShieldAlert color={COLORS.accent} size={24} />
          <Text style={styles.cardTitle}>Servicio Activo</Text>
        </View>
        <Text style={styles.description}>
          Escuchando mensajes de Transfermóvil y ETECSA en segundo plano.
        </Text>
        
        <View style={styles.tokenBox}>
          <Text style={styles.tokenLabel}>TU TOKEN SECRETO</Text>
          <Text style={styles.tokenValue}>{userToken}</Text>
        </View>
      </View>

      {/* Sección de Acción (Subir a PRO) */}
      {!isPro && (
        <View style={styles.upgradeSection}>
          <Text style={styles.upgradeText}>
            Desbloquea reenvíos ilimitados a tu propio servidor (Webhooks).
          </Text>
          <PrimaryButton 
            title="Mejorar a Versión PRO" 
            variant="accent" 
            icon={Zap}
            onPress={() => console.log("Abrir modal de pago PRO")} 
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeFree: {
    backgroundColor: COLORS.surfaceHighlight,
  },
  badgePro: {
    backgroundColor: COLORS.accent,
  },
  badgeText: {
    color: COLORS.textPrimary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: COLORS.surfaceHighlight,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  tokenBox: {
    backgroundColor: COLORS.background,
    padding: 15,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: COLORS.surfaceHighlight,
  },
  tokenLabel: {
    color: COLORS.textSecondary,
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tokenValue: {
    color: COLORS.primary,
    fontSize: 16,
    fontFamily: 'monospace',
  },
  upgradeSection: {
    marginTop: 'auto', // Empuja esto al fondo de la pantalla
    marginBottom: 20,
  },
  upgradeText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
  }
});
