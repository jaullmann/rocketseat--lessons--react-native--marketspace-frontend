import React, { useState } from "react";
import { Text, HStack, VStack } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { UserAnnouncementsCard } from "@components/UserAnnouncementsCard";
import { ProductCard } from "@components/ProductCard";
import { SearchBar } from "@components/SearchBar";
import { UserPhoto } from "@components/UserPhoto";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";

export function Home() {
  const [userName, setUserName] = useState("username");
  const [userProductsAmount, setUserProductsAmount] = useState(1);

  const productsTest = [
    { id: 0, title: "Carro", userPhotoUri: "https://github.com/jaullmann.png", productPhotoUri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/01/Xiaomi-SU7-2025-carro-eletrico-chines-5.jpg?w=1024' , price: 30.5 },
    { id: 1, title: "Tênis usado", price: 50 },
    { id: 2, title: "Tênis de corrida", price: 30.5 },
    { id: 3, title: "Bicicleta", price: 300 },
    { id: 4, title: "Bicicleta", price: 300 },
    { id: 10, title: "Tênis de corrida", price: 30.5 },
    { id: 11, title: "Tênis usado", price: 50 },
    { id: 12, title: "Tênis de corrida", price: 30.5 },
    { id: 13, title: "Bicicleta", price: 300 },    
  ];

  return (
    <FlatList
      data={productsTest}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard 
          title={item.title} 
          price={item.price} 
          userPhotoUri={item.userPhotoUri}
          productPhotoUri={item.productPhotoUri}          
        />
      )}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{ gap: 20, justifyContent: 'space-between' }}
      contentContainerStyle={{
        paddingBottom: 28,
        paddingTop: 66,
        paddingHorizontal: 24,
        gap: 24,
      }}
      ListHeaderComponent={() => (
        
          <VStack>
            <HStack alignItems="center" justifyContent="space-between">
              <HStack>
                <UserPhoto uri={"https://github.com/jaullmann.png"} size="md" />
                <VStack marginLeft={10} justifyContent="flex-start">
                  <Text fontFamily="$body" color={"$gray100"} fontSize={"$md"}>
                    Boas Vindas,
                  </Text>
                  <Text fontFamily="$heading" color={"$gray100"} fontSize={"$md"}>
                    {userName}
                  </Text>
                </VStack>
              </HStack>
              <Button w={140} title="Criar anúncio" icon="plus" />
            </HStack>

            {userProductsAmount > 0 && (
              <VStack>
                <Text
                  mt={32}
                  mb={12}
                  fontFamily="heading"
                  color={"$gray300"}
                  fontSize={"$sm"}
                >
                  Seus produtos anunciados para venda
                </Text>
                <UserAnnouncementsCard amount={userProductsAmount} />
              </VStack>
            )}

            <Text
              mt={32}
              mb={12}
              fontFamily="heading"
              color={"$gray300"}
              fontSize={"$sm"}
            >
              Compre produtos variados
            </Text>
            <SearchBar inputText="" placeholder="Buscar anúncio" />

            <Filter />
          </VStack>
        
      )}
    />
  );
}
