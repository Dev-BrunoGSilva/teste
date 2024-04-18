import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'sign-in',
};

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen name="(root)"  options={{headerShown:false}} />
    </Stack>
  );
}
