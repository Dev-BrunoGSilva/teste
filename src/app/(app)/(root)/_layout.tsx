import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { useSession } from '../../../utils/authContext';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href={"/sign-in"} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer initialRouteName='index' screenOptions={{headerTitleAlign:'center', headerTitle: 'SIRCON'}}>
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
