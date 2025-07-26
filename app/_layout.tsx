import BackDrop from '@/components/BackDrop';
import { AppProvider } from '@/contexts/AppContext';
import { store } from '@/store/store';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from 'react-native-popup-menu';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Ubuntu-Light': require('../assets/fonts/Ubuntu/Ubuntu-Light.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu/Ubuntu-Regular.ttf'),
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu/Ubuntu-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return ""
  }

  return (
    <Provider store={store}>
      <MenuProvider>
        <AppProvider>
          <ThemeProvider value={DarkTheme}>
            <SafeAreaView
              style={{ flex: 1 }}
              edges={['bottom']}
              className="bg-primary_bg"
            >
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="splash" options={{ headerShown: false }} />
              </Stack>
              <BackDrop />
              <StatusBar style="light" />
            </SafeAreaView>
            <Toast />
          </ThemeProvider>
        </AppProvider>
      </MenuProvider>
    </Provider>
  );
}
