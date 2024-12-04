import { Image, SafeAreaView, View } from 'react-native';
import React from 'react';
import { Button, Text } from 'react-native-paper';
import { router } from 'expo-router';

const Index = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('@/assets/images/logo.jpg')} style={{ width: 50, height: 50 }} />
        <Text variant='titleMedium' style={{ marginTop: 12, color: 'black' }}>
          Meet495
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('@/assets/images/welcome.jpg')} style={{ width: 350, height: 300, marginTop: 110 }} />
      </View>
      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <Text variant='headlineMedium' style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
          Hello !
        </Text>
        <Text variant='bodyMedium' style={{ textAlign: 'center', marginTop: 10, color: '#A6AEBF', paddingInline: 55 }}>
          Welcome to Meet495. The best market place of all time.
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginBlock: 45, flex: 1 }}>
        <Button mode='contained' style={{ width: 250, borderRadius: 10, backgroundColor: '#7ED4AD' }} onPress={() => router.push('login')}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
        </Button>

        <Button mode='outlined' style={{ width: 250, borderRadius: 10, borderColor: '#7ED4AD', marginTop: 10 }} onPress={() => router.push('signup')}>
          <Text style={{ color: '#7ED4AD', fontWeight: 'bold' }}>Sign Up</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Index;
