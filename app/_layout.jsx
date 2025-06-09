import { router, Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { firebaseAuth } from '../firebaseConfig';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

export default function RootLayout() {
  const auth = firebaseAuth;

  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          headerShown: false, // Hides the title bar for all screens
        }}
      />
    </PaperProvider>
  );
}
