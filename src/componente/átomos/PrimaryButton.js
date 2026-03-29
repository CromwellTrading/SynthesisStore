// Ruta: src/components/atoms/PrimaryButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../../theme/colors';

export default function PrimaryButton({ 
  title, 
  onPress, 
  variant = 'primary', // 'primary' o 'accent' (para versión PRO)
  isLoading = false,
  icon: Icon
}) {
  const backgroundColor = variant === 'accent' ? COLORS.accent : COLORS.primary;

  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }]} 
      onPress={onPress}
      disabled={isLoading}
      activeOpacity={0.8}
    >
      {isLoading ? (
        <ActivityIndicator color={COLORS.textPrimary} />
      ) : (
        <>
          {Icon && <Icon color={COLORS.textPrimary} size={20} style={styles.icon} />}
          <Text style={styles.text}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4, // Sombra para Android
  },
  text: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  icon: {
    marginRight: 8,
  }
});
