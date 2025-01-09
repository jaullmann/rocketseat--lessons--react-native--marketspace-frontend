import React, { useState } from "react";
import { ScrollView, Center, Text, HStack, VStack } from "@gluestack-ui/themed";
import { UserAnnouncementsCard } from "@components/UserAnnouncementsCard";
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
      <VStack mt={66} mx={"$6"} >

        <HStack 
          mb={32} 
          alignItems="center" 
          justifyContent="space-between"
        >
          <HStack>
            <UserPhoto uri={'https://github.com/jaullmann.png'} size="md" />
            <VStack marginLeft={10} justifyContent="flex-start" >
              <Text               
                fontFamily="body" 
                color={"$gray100"} 
                fontSize={"$md"} 
                width={"$full"}
                >
                Boas Vindas,
              </Text>
              <Text 
                fontFamily="heading" 
                color={"$gray100"} 
                fontSize={"$md"} 
                width={"$full"}
                >
                {userName}
              </Text>
            </VStack>
          </HStack>
          <Button w={140} title="Criar anúncio" icon="plus" />
        </HStack>

        {
          userProductsAmount > 0 &&
          <VStack>
            <Text mb={12} fontFamily="heading" color={"$gray300"} fontSize={"$sm"}>
              Seus produtos anunciados para venda
            </Text>
            <UserAnnouncementsCard amount={userProductsAmount} />
          </VStack>
        }

      </VStack> 
         
    </ScrollView>
  );
}