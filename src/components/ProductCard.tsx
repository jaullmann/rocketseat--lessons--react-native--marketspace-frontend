import { Image, VStack, HStack, Center, Text, useStyled } from "@gluestack-ui/themed";
import { ComponentProps } from 'react'
import { CameraOff } from "lucide-react-native";


type Props = ComponentProps<typeof Image> & {
  title: string;
  price: number;
  productPhotoUri?: string,
  userPhotoUri?: string;
  newProduct?: boolean;
  onPress?: () => void
}

export function ProductCard({
  title,
  price,
  productPhotoUri,
  userPhotoUri,
  newProduct = false,
  onPress,
  ...props
}: Props){

  const styled = useStyled();

  function formatCurrency(value: number): string {  
    return value
      .toFixed(2) 
      .replace('.', ',') 
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); 
  }
  
  return(
    <VStack 
      h={144} 
      flex={1} 
      justifyContent="flex-start" 
      maxWidth={'48%'} 
      alignSelf="flex-start"      
    >
      <HStack 
        w={'94%'} 
        mx={"$1"} 
        alignItems="flex-start"
        justifyContent="space-between"
        position="absolute"
        zIndex={999}
        top={5}        
        left={1}
      >
        { 
          userPhotoUri ?
          <Image 
            source={{ uri: userPhotoUri }}
            borderWidth={1}
            borderColor="$gray700"
            w={24}
            h={24} 
            rounded={"$full"}         
            resizeMode="cover"          
          /> :
          <Center />
        }
        <Text 
          px={8} 
          py={2}
          rounded={"$full"} 
          color={"$white"}
          bg={newProduct ? "$blueRegular" : "$gray200" }
          fontSize={"$2xs"}
          fontFamily="$heading"          
          textTransform="uppercase"
        >
            {newProduct ? "novo" : "usado"}
        </Text>

      </HStack>

      { 
        productPhotoUri ? 
        <Image 
          source={{ uri: productPhotoUri }}
          w="$full"
          h={100} 
          rounded={"$sm"}         
          resizeMode="cover"          
          {...props}
        /> 
        :
        <Center
          w="$full" 
          h={100} 
          bg={styled.config.tokens.colors.gray400}
          rounded={"$sm"}           
        > 
          <CameraOff size={48} color={styled.config.tokens.colors.gray500} />
        </Center>
      }

      <VStack>
        <Text
          h={18}
          px={2}
          fontSize={"$sm"}
          fontFamily="$body"   
          color={"$gray200"}
          numberOfLines={1}  
          ellipsizeMode="tail"          
        >
          {title}
        </Text>

        <HStack px={2} alignItems="baseline">
          <Text            
            paddingRight={6}
            fontSize={"$xs"}
            fontFamily="$heading"   
            color={"$gray100"}             
          >
            R$
          </Text>
          <Text            
            fontSize={"$md"}
            fontFamily="$heading"   
            color={"$gray100"}            
          >
            {formatCurrency(price)}
          </Text>
        </HStack>
      </VStack>
      
    </VStack>
  )
}