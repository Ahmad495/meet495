import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
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
