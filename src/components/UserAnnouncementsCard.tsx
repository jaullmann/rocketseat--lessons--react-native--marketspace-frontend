import { VStack, HStack, Text, useStyled } from "@gluestack-ui/themed";
import { Tag, ArrowRight } from "lucide-react-native";

type Props = {
  amount: number;
}

export function UserAnnouncementsCard({ amount }: Props) {

  const styled = useStyled();

  return(
    <HStack       
      h={66}
      px={18}
      rounded={6} 
      bg={"$gray500"}        
      justifyContent="space-between"
    >

      <HStack alignItems="center" gap={"$4"}>
        <Tag size={22} color={styled.config.tokens.colors.blueRegular} />
        <VStack>
          <Text
            fontFamily="$heading"
            fontSize={20}
            color={"$gray200"}
          >
            {amount}
          </Text>
          <Text
            fontFamily="$body"
            fontSize={12}
            color={"$gray200"}
          >
            anúncios ativos
          </Text>
        </VStack>       

      </HStack>

      <HStack alignItems="center" gap={"$2"}>
        <Text
          fontSize={"$sm"}
          fontFamily="$heading"
          color={"$blueRegular"}
        >
          Meus anúncios
        </Text>
        <ArrowRight size={18} color={styled.config.tokens.colors.blueRegular} />
      </HStack>

    </HStack>
  )
}