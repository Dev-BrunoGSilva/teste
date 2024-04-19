import { Text, View } from 'react-native';
import { useSession } from '../../../utils/authContext';

export default function Contato() {
  const { signOut } = useSession();
  return (
    <View className='flex-1 justify-center items-center bg-pink-500'>
      <Text>
        CadastroScreen
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
