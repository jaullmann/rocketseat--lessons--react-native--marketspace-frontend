import { ScanBarcode, QrCode, Banknote, CreditCard, Landmark } from "lucide-react-native";
import { Text, HStack, useStyled } from "@gluestack-ui/themed";
import { ViewProps } from "react-native";


type Props = ViewProps & {
  paymentMethod: "Boleto" | "Pix" | "Dinheiro" | "Credito" | "Deposito"
}

export function PaymentTag({ paymentMethod }: Props){
  
  const styled = useStyled();

  function iconSelect(){
    const iconColor = styled.config.tokens.colors.gray200;
    const iconSize = 18;
    switch (paymentMethod) {
      case "Boleto":
        return <ScanBarcode color={iconColor} size={iconSize} />
      case "Pix":
        return <QrCode color={iconColor} size={iconSize} />
      case "Dinheiro":
        return <Banknote color={iconColor} size={iconSize} />
      case "Credito": 
        return <CreditCard color={iconColor} size={iconSize} />
      case "Deposito":
        return <Landmark color={iconColor} size={iconSize} />
    }
  }

  function textSelect(): string{
    switch (paymentMethod) {
      case "Boleto":
        return "Boleto"
      case "Pix":
        return "Pix"
      case "Dinheiro":
        return "Dinheiro"
      case "Credito": 
        return "Cartão de crédito"
      case "Deposito":
        return "Depósito bancário"
    }
  }

  return(
    <HStack mb={4} gap={8} alignItems="center" justifyContent="flex-start">
      { iconSelect() }
      <Text
        fontFamily="$body"
        fontSize={"$sm"}
        color="$gray200"
      >
        { textSelect() }
      </Text>
    </HStack>
  )
};