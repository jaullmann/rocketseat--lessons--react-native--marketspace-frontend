import { Center, ScrollView, Text, VStack, Avatar } from "@gluestack-ui/themed";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import Logo from "@assets/logo.svg";

export function SignUp() {
  return (
    <ScrollView
      bg="$gray600"
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} pt={20} pb={45} marginHorizontal={'$12'} alignItems="center">
        <Logo width={60} height={40}/>
        <Text mt={12} fontFamily="$heading" fontSize='$2xl' color="$gray100">
          Boas vindas!
        </Text>
        <Text mt={8} textAlign="center" fontFamily="$body" fontSize='$sm' color="$gray200">
          Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
        </Text>

        <Center w={"$80"} mt={"$8"} borderWidth={1} borderColor="yellow" gap={"$4"}>
          <Avatar />
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" keyboardType="email-address" />
          <Input placeholder="Telefone" keyboardType="phone-pad" />
          <Input placeholder="Senha" secureTextEntry visibilityControl/>
          <Input placeholder="Confirme a senha" secureTextEntry visibilityControl/>
          <Button title="Criar"/>
        </Center>

        <Center w={"$80"} mt={"$12"} borderWidth={1} borderColor="yellow" gap={"$4"}>
          <Text alignSelf="center" fontFamily="$body" color="$gray200">
            Já tem uma conta?
          </Text>
          <Button title="Ir para login" style="gray" />
        </Center>
        
      </VStack>

    </ScrollView>
  );
}