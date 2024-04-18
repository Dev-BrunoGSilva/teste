import { Text, View } from "react-native";

export default function notFoundScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="font-bold text-4xl text-emerald-500">Pagina não encontrada!</Text>
    </View>
  );
}
