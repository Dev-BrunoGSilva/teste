import { useSession } from '@//utils/authContext';
import { Redirect, Stack } from 'expo-router';

import { Text } from 'react-native';

export const unstable_settings = {
  initialRouteName: 'sign-in',
};

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'ios'
        }}
      />
    </Stack>
  );
}
