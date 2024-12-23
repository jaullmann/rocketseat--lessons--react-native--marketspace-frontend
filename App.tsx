import { StatusBar } from 'react-native';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import { GluestackUIProvider, Text, Center } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";

import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  return (
    <GluestackUIProvider config={config}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ?
        <Center flex={1} bg="$gray600">
          <Text>HOME</Text>
        </Center> 
        : 
        <Loading />
      }

    </GluestackUIProvider>
  );
}
