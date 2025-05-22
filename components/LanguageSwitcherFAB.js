import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LanguageSwitcherFAB() {
  const { i18n } = useTranslation();
  const language = i18n.language;
  console.log('FAB rendered');
  const handleLanguageSwitch = () => {
    i18n.changeLanguage(language === 'en' ? 'mr' : 'en');
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleLanguageSwitch}
        style={styles.fab}
        android_ripple={{ color: '#F59E0B' }}
      >
        <Text style={styles.fabText}>{language === 'en' ? 'मराठी' : 'English'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: 'box-none',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 172,
    backgroundColor: '#F59E0B',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  fabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 