import { SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../../firebaseConfig';
import Header from '../../../components/listing/Header';
import MarketPlaceListing from '../../../components/listing/MarketPlaceListing';

const index = () => {
  const auth = firebaseAuth;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is logged in, redirect to Marketplace
        router.push('/');
      }
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingInline: 15,
      }}
    >
      <Header />
      <MarketPlaceListing />
    </SafeAreaView>
  );
};

export default index;
