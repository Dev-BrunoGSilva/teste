import { useSession } from '@//utils/authContext';
import { Text, View } from 'react-native';

export default function Settings() {
  const { signOut } = useSession();
  return (
    <View className='bg-red-500' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        HomeScreen
      </Text>
      <Text
      className='font-bold text-4xl text-emerald-500'
        onPress={() => {
          signOut();
        }}>
        Sign Out
      </Text>
    </View>
  );
}
