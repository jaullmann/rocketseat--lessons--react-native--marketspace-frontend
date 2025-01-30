import { VStack, HStack, Text, ScrollView } from "@gluestack-ui/themed";
import { SmallConditionTag } from "@components/SmallConditionTag";
import { formatCurrency } from "@utils/Functions";
import { ImageSwiper } from "@components/ImageSwiper";
import { PaymentTag } from "@components/PaymentTag";
import { BackButton } from "@components/BackButton";
import { UserPhoto } from "@components/UserPhoto";
import { Button } from "@components/Button";

export function Details() {

  const username = 'Username Example';
  const isProductNew = true;
  const title = "Nome do produto";
  const price = 100;
  const imageUris = [
    'https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1687558246422-e94f0864d467?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet deserunt sed dicta repudiandae quaerat placeat neque facilis nesciunt ratione ut, reprehenderit voluptatem, quisquam, maxime ipsam reiciendis minus tenetur molestias fuga?"
  const acceptExchange = true;
  const acceptedPayments = ["Boleto", "Pix", "Dinheiro", "Credito", "Deposito"];
  const contactButton = () => {}

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <BackButton ml={"$4"} mb={"$3"}/>
      <ImageSwiper images={imageUris} />
      <VStack mx={"$6"} mt={"$6"}>

        <HStack gap={"$2"} alignItems={"center"} mb={24}>
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

        <SmallConditionTag isNew={isProductNew} mb={8}/>

        <HStack mb={10} justifyContent={"space-between"}>
          <Text fontSize={"$xl"} fontFamily={"$heading"} color={"$gray100"}>
            {title}
          </Text>
          <HStack alignItems={"baseline"} >
           <Text mr={6} fontSize={"$sm"} fontFamily={"$heading"} color={"$blueLight"}>
            R$
           </Text>
           <Text fontSize={"$xl"} fontFamily={"$heading"} color={"$blueLight"}>
            {formatCurrency(price)}
           </Text>
          </HStack>
        </HStack>

        <Text mb={24} fontSize={"$sm"} fontFamily={"$body"} color={"$gray200"}>
          {description}
        </Text>

        <HStack mb={16}>
          <Text mr={6} fontSize={"$sm"} fontFamily={"$heading"} color={"$gray200"}>
            Aceita troca?
          </Text>
          <Text fontSize={"$sm"} fontFamily={"$body"} color={"$gray200"}>
            {acceptExchange ? "Sim" : "Não"}
          </Text>
        </HStack>

        <VStack gap={4} mb={26}>
          <Text mb={6} fontSize={"$sm"} fontFamily={"$heading"} color={"$gray200"}>
           Meios de pagamento:
          </Text>
          {acceptedPayments.includes("Boleto") && <PaymentTag paymentMethod="Boleto"/>}
          {acceptedPayments.includes("Pix") && <PaymentTag paymentMethod="Pix"/>}
          {acceptedPayments.includes("Dinheiro") && <PaymentTag paymentMethod="Dinheiro"/>}
          {acceptedPayments.includes("Credito") && <PaymentTag paymentMethod="Credito"/>}
          {acceptedPayments.includes("Deposito") && <PaymentTag paymentMethod="Deposito"/>}
        </VStack>

      </VStack>

      <HStack 
        height={90}
        px={"$6"} 
        alignItems={"center"}
        justifyContent={"space-between"}
        bg={"$gray700"}
      >
        <HStack alignItems={"baseline"} >
          <Text mr={6} fontSize={"$sm"} fontFamily={"$heading"} color={"$blueLight"}>
            R$
          </Text>
          <Text fontSize={"$2xl"} fontFamily={"$heading"} color={"$blueLight"}>
            {formatCurrency(price)}
          </Text>
        </HStack>
        <Button 
          title={"Entrar em contato"}
          style={"blue"}
          icon={"contact"}
          onPress={contactButton}
        />
      </HStack>

    </ScrollView>
  );
}