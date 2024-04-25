import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { useSession } from '@//utils/authContext';
import { Text } from 'react-native';
import { Redirect } from 'expo-router';

export default function LayoutScreens() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href={"/(public)/sign-in"} />;
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer initialRouteName='index' screenOptions={{ headerTitleAlign:'center', headerTitle: 'SIRCON' }}>
        <Drawer.Screen
          name="index"
          options={{
            title: 'Dashboard',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
