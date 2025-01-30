import { useState } from "react";
import { FlatList } from "react-native";
import { Plus } from "lucide-react-native";
import { Text, VStack, HStack, Pressable, useStyled } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { ProductCard } from "@components/ProductCard";
import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";

export function MyProducts() {

  const styled = useStyled();

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

            <HStack mt={64} mb={32} alignItems="center" justifyContent="space-between">
              <HStack w={24} />
              <Text color={"$gray100"} fontFamily="$heading" fontSize={"$xl"}>
                Meus anúncios
              </Text>
              <TouchableOpacity
                onPress={undefined}
              >
                <Plus color={styled.config.tokens.colors.gray100} size={24} />
              </TouchableOpacity>
            </HStack>

            <HStack>
              <Text>
                {`${userProductsAmount} anúncios`}
                
              </Text>
            </HStack>
                    
          </VStack>
        
      )}
    />
  );
}