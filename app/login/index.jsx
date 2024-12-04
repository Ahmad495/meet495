import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Icon, IconButton } from 'react-native-paper';
import { router } from 'expo-router';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <IconButton icon='arrow-left' size={35} onPress={() => router.push('')} />

      <View style={{ marginTop: 55, marginLeft: 10, marginBottom: 50, paddingInline: 15 }}>
        <Text variant='displayMedium' style={{ fontWeight: 'bold', color: 'black' }}>
          Welcome !
        </Text>
        <Text variant='titleMedium' style={{ fontWeight: 'bold', color: '#A6AEBF' }}>
          Sign in to your account
        </Text>
      </View>

      <LoginForm />

      <View style={{ alignItems: 'center' }}>
        <Text variant='titleMedium' style={{ fontWeight: 'bold', color: 'black' }}>
          Social Media
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 40 }}>
          <Image source={require('@/assets/images/google.png')} style={{ width: 30, height: 30 }} />
          <Image source={require('@/assets/images/facebook.png')} style={{ width: 30, height: 30, marginInline: 30 }} />
          <Image source={require('@/assets/images/instagram.png')} style={{ width: 30, height: 30 }} />
        </View>

        <Text variant='labelLarge' style={{ marginTop: 50 }}>
          Don't have an account ?{' '}
          <Text style={{ color: '#7ED4AD' }} onPress={() => router.push('signup')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  textSpan: {
    color: '0A3981',
  },
});
