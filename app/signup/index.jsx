import { View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import SignUpForm from '@/components/auth/SignUpForm';
import { router } from 'expo-router';
import { IconButton, Text } from 'react-native-paper';

const SignUp = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <IconButton icon='arrow-left' size={35} onPress={() => router.push('')} />

      <View style={{ marginTop: 55, marginLeft: 10, marginBottom: 30, paddingInline: 15 }}>
        <Text variant='displayMedium' style={{ fontWeight: 'bold', color: 'black' }}>
          Hi !
        </Text>
        <Text variant='titleMedium' style={{ fontWeight: 'bold', color: '#A6AEBF' }}>
          Create a new account
        </Text>
      </View>

      <SignUpForm />

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
          Already have an account{' '}
          <Text style={{ color: '#7ED4AD' }} onPress={() => router.push('login')}>
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
