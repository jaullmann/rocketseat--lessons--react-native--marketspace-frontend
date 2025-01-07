import { Center, VStack, Text, ScrollView } from "@gluestack-ui/themed";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import Logo from "@assets/logo.svg";

export function SignIn() {
  return (
    <ScrollView
      bg="$gray700"
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Center pt={70} pb={68} $base-rounded={24} bg="$gray600" justifyContent="center">
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
          <Center w={"$80"} gap="$3">
            <Input placeholder="E-mail" keyboardType="email-address" />
            <Input placeholder="Senha" secureTextEntry />
            <Button title="Entrar" style={"blue"} mt={'$4'} />
          </Center>       

        </VStack>
      </Center> 

      <VStack w={"$80"} gap="$5" alignSelf="center" flex={1}>
        <Text mt={58} alignSelf="center" fontFamily="$body" color="$gray200">
          Ainda não tem acesso?
        </Text>
        <Button title="Criar uma conta" style={"gray"} />
      </VStack>


    </ScrollView>
  );
}