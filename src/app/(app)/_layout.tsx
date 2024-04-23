import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(root)',
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
      <Stack.Screen name="(root)"  options={{ headerShown:false }} />
    </Stack>
  );
}
