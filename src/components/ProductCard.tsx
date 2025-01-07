import { Image, VStack, HStack, Center, Text, useStyled } from "@gluestack-ui/themed";
import { ComponentProps } from 'react'
import { CameraOff } from "lucide-react-native";


type Props = ComponentProps<typeof Image> & {
  title: string;
  price: number;
  productPhotoUri?: string,
  userPhotoUri?: string;
  newProduct: boolean;
  onPress: () => {}
}

export function ProductCard({
  title,
  price,
  productPhotoUri,
  userPhotoUri,
  newProduct,
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
    <VStack h={144} flex={1/2} justifyContent="flex-start">
      <HStack 
        w={"$full"} 
        mx={"$1"} 
        alignItems="flex-start"
        justifyContent="space-between"
      >
        { 
          userPhotoUri ?
          <Image 
            source={'https://github.com/jaullmann.png'}
            borderWidth={1}
            borderColor="$gray700"
            w={"$8"}
            h={"$8"} 
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
          bg={newProduct? "$gray200" : "$blueRegular"}
          fontSize={"$2xs"}
          fontFamily="$heading"          
          textTransform="uppercase"
        >
            {newProduct? "novo" : "usado"}
        </Text>

      </HStack>

      { 
        productPhotoUri ? 
        <Image 
          source={'https://static.wixstatic.com/media/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp/v1/fill/w_350,h_375,al_c/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp'}
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
          <CameraOff size={"$8"} color={styled.config.tokens.colors.gray300} />
        </Center>
      }

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

      <HStack px={2} alignItems="center" justifyContent="flex-end">
        <Text
          h={18}
          paddingRight={6}
          fontSize={"$xs"}
          fontFamily="$heading"   
          color={"$gray100"} 
          verticalAlign="bottom"       
        >
          R$
        </Text>
        <Text
          h={18}          
          fontSize={"$md"}
          fontFamily="$heading"   
          color={"$gray100"}
          verticalAlign="bottom"         
        >
          {formatCurrency(price)}
        </Text>
      </HStack>
      
    </VStack>
  )
}