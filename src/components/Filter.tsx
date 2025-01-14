import { 
  VStack,   
  Text, 
  Checkbox, 
  HStack, 
  CheckboxGroup, 
  CheckboxIndicator, 
  CheckboxIcon, 
  CheckboxLabel,
  Center,
  useStyled } from "@gluestack-ui/themed";
import { View } from "react-native";
import { useState } from "react";
import { Tag } from "@components/Tag";
import { Button } from "@components/Button";
import { Switch } from "@gluestack-ui/themed";
import { CheckIcon, X } from "lucide-react-native";

export function Filter({ ...props }){

  const [acceptExchange, setAcceptExchange] = useState(false);
  const [values, setValues] = useState(["Boleto", "Pix", "Dinheiro"]);

  const styled = useStyled();

  function handleAcceptExchange(){
    setAcceptExchange(!acceptExchange);
  }
    
  return (
    <View       
      style={{
        position: "static",
        top: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: "$gray600",
        paddingVertical: 24,
      }}
      {...props}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <Text>Filtrar anúncios</Text>
        <X size={24} color={styled.config.tokens.colors.gray400}/>
      </HStack>      
      <Text>Condição</Text>
      <HStack>
        <Tag title={"Novo"} />
        <Tag title={"Usado"} />
      </HStack>
      <Text>Aceita troca?</Text>
      <Switch         
        backgroundColor="$gray400"
        value={acceptExchange} 
        onToggle={handleAcceptExchange}       
      />
      <Text>Meios de pagamento aceitos</Text>
      
      <CheckboxGroup
        value={values}
        onChange={(keys) => {
          setValues(keys)
        }}
      >
        <VStack space="md">

          <Checkbox value="Boleto">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Boleto</CheckboxLabel>
          </Checkbox>

          <Checkbox value="Pix">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Pix</CheckboxLabel>
          </Checkbox>

          <Checkbox value="Dinheiro">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Dinheiro</CheckboxLabel>
          </Checkbox>

          <Checkbox value="Credito">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Cartão de crédito</CheckboxLabel>
          </Checkbox>

          <Checkbox value="Deposito">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Depósito bancário</CheckboxLabel>
          </Checkbox>

        </VStack>
      </CheckboxGroup>

      <Center 
        flexDirection="row" 
        mt="$8"
        gap="$4"
        px="$4"
      >
        <Button 
          title="Resetar filtros" 
          style="gray"
          flex={1}
        />
        <Button 
          title="Aplicar filtros" 
          style="regular"
          flex={1}
        />
      </Center>
      
    </View>
  );
}

