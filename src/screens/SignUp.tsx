import { useState } from "react";
import { Center, ScrollView, Text, VStack, SafeAreaView } from "@gluestack-ui/themed";
import { UserPhoto } from "@components/UserPhoto";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import Logo from "@assets/logo.svg";

export function SignUp() {
  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/jaullmann.png',
  )

  return (
    <ScrollView
      bg="$gray600"
      contentContainerStyle={{ paddingBottom: 28 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} pt={64} pb={45} mx={'$12'} alignItems="center" >
        <Logo width={60} height={40}/>
        <Text mt={12} fontFamily="$heading" fontSize='$2xl' color="$gray100">
          Boas vindas!
        </Text>
        <Text mt={8} textAlign="center" fontFamily="$body" fontSize='$sm' color="$gray200">
          Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
        </Text>

        <Center w={"$80"} mt={"$8"} gap={"$3"}>
          <UserPhoto uri={userPhoto} />
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" keyboardType="email-address" />
          <Input placeholder="Telefone" keyboardType="phone-pad" />
          <Input placeholder="Senha" secureTextEntry visibilityControl/>
          <Input placeholder="Confirme a senha" secureTextEntry visibilityControl/>
          <Button title="Criar"/>
        </Center>

        <Center w={"$80"} mt={"$12"} gap={"$4"}>
          <Text alignSelf="center" fontFamily="$body" color="$gray200">
            Já tem uma conta?
          </Text>
          <Button title="Ir para login" style="gray" />
        </Center>
        
      </VStack>

    </ScrollView>
  );
}