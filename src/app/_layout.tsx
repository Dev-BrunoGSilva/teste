import { Slot } from 'expo-router';
import { SessionProvider } from '../utils/authContext';
import '../../global.css'

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
