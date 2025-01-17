import { VStack, HStack, Text } from "@gluestack-ui/themed";
import { UserPhoto } from "@components/UserPhoto";
import { BackButton } from "@components/BackButton";
import { ImageSwiper } from "@components/ImageSwiper";

export function Details() {

  const username = 'Username Example';

  const imageUris = [
    'https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1687558246422-e94f0864d467?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <VStack justifyContent="flex-start" flex={1}>
      <BackButton ml={"$4"} mb={"$3"}/>
      <ImageSwiper images={imageUris} />
      <VStack mx={"$6"} mt={"$6"}>
        <HStack gap={"$2"} alignItems={"center"}>
          <UserPhoto 
            uri={"https://github.com/jaullmann.png"} 
            size={"sm"}
            />
          <Text 
            fontSize={"$sm"}           
            fontFamily={"body"}
          >
            {username}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}