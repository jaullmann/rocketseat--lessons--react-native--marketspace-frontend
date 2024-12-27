import { Center, VStack, Text } from "@gluestack-ui/themed";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import Logo from "@assets/logo.svg";

export function SignIn() {
  return (
    <Center flex={1} bg="$gray600" justifyContent="center">
      <Logo width={125} height={100}/>
      <VStack> 
        <Text alignSelf="center" fontFamily="$heading" fontSize="$4xl" color="$gray100">
          marketspace
        </Text>       
        <Text alignSelf="center" fontFamily="$body" color="$gray300">
          Seu espaço de compra e venda
        </Text>

        <Text mt={"$20"} mb={"$5"} alignSelf="center" fontFamily="$body" color="$gray200">
          Acesse sua conta
        </Text>
        <Center w={"$80"} gap="$2">
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
          <Button title="Entrar" color={"blue"} mt={'$4'} icon="plus"/>
        </Center>       

      </VStack>
    </Center> 
  );
}