import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

import { useSession } from "../../utils/authContext";
import { Input } from "@//components/input";

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <View className="flex-1 justify-center items-center">
      <View className="mx-2 shadow-md p-4 rounded-xl border-2 border-black">
      <Image style={{ width: '100%', objectFit:'cover' }} source={require('../../../assets/images/logo-sircon.png')}></Image>
      <Input iconLabel="lock" inputlabel="E-mail" placeholder="Digite seu email..." className="w-full"></Input>
      <Input iconLabel="user-alt"  inputlabel="Senha" placeholder="Digite sua senha..."  className="w-full"></Input>
      <Text className="font-bold my-2 text-xl text-slate-500">
        Não tem acesso? Entre em contato com sua administradora.
      </Text>
      <Pressable className="w-full justify-center items-center py-3 px-2 my-2 rounded-md bg-sirconfirstColor active:bg-sircondarkColor"
      onPress={() => {
        signIn();
        router.replace("/");
      }}
      >
      <Text className="text-md font-semibold text-white">Entrar</Text>
      </Pressable>
      </View>
    </View>
  );
}
