import { router } from "expo-router";
import { Text, View } from "react-native";

import { useSession } from "../../utils/authContext";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        className="font-bold text-4xl text-emerald-500"
        onPress={() => {
          signIn();
          router.replace("/");
        }}
      >
        Sign In
      </Text>
    </View>
  );
}
