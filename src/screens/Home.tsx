import { useState } from "react";
import { ScrollView, Center, Text, HStack, VStack } from "@gluestack-ui/themed";
import { Tag, ArrowRight } from "lucide-react-native";
import { ProductCard } from "@components/ProductCard";
import { UserPhoto } from "@components/UserPhoto";
import { Button } from "@components/Button";

export function Home() {

  const [userName, setUserName] = useState("usuário");
  const [userProductsAmount, setUserProductsAmount] = useState(1);

  return (
    <ScrollView
      bg="$gray600"
      contentContainerStyle={{ paddingBottom: 28 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack mt={66} mb={32} mx={"$6"}>

        <HStack>
          <UserPhoto uri={'https://github.com/jaullmann.png'} size="md" />
          <VStack justifyContent="flex-start" marginLeft={10}>
            <Text fontFamily="body" color={"$gray100"} fontSize={"$md"}>Boas Vindas,</Text>
            <Text fontFamily="heading" color={"$gray100"} fontSize={"$md"}>{userName}</Text>
          </VStack>
          <Button w={140} title="Criar anúncio" icon="plus" alignSelf="flex-end"/>
        </HStack>

        {
          userProductsAmount > 0 &&
          <VStack>
            <Text fontFamily="heading" color={"$gray300"} fontSize={"$sm"}>
              Seus produtos anunciados para venda
            </Text>
          </VStack>
        }

      </VStack> 
         
    </ScrollView>
  );
}