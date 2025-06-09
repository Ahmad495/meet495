import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';

const Header = () => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Image source={require('@/assets/images/logo.jpg')} style={{ width: 50, height: 50 }} />
        <IconButton icon='cart' size={24} style={styles.iconButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    borderRadius: 25,
    backgroundColor: '#F8FAFC',
    cursor: 'pointer',
  },
});

export default Header;
