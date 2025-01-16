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
import { Modal, View } from "react-native";
import { ComponentProps, useState } from "react";
import { Tag } from "@components/Tag";
import { Button } from "@components/Button";
import { Switch } from "@gluestack-ui/themed";
import { CheckIcon, X } from "lucide-react-native";

type Props = ComponentProps<typeof Modal> & {
  isVisible: boolean
}

export function Filter({ isVisible = false, ...props }: Props){

  const [isFilterVisible, setIsFilterVisible] = useState(isVisible);
  const [acceptExchange, setAcceptExchange] = useState(false);
  const [values, setValues] = useState(["Boleto", "Pix", "Dinheiro"]);

  const styled = useStyled();

  function handleAcceptExchange(){
    setAcceptExchange(!acceptExchange);
  }

  function handleCloseFilter(){
    setIsFilterVisible(false);
  }
    
  return (
    <Modal  
      visible={isFilterVisible} 
      animationType="slide"
      onDismiss={handleCloseFilter}                
      transparent      
      {...props}      
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',          
        }}
      >

        <View
          style={{
            marginTop: "60%",          
            position: "absolute",          
            flex: 1,
            bottom: 0,
            left: 0,
            right: 0,
            gap: 24,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: styled.config.tokens.colors.gray600,
            padding: 24,
          }}
          >

          <HStack alignItems="center" justifyContent="space-between">
            <Text fontSize={"$xl"} fontFamily="heading" color={"$gray100"}>Filtrar anúncios</Text>        
            <X 
              size={24} 
              color={styled.config.tokens.colors.gray400} 
              onPress={handleCloseFilter}          
              />        
          </HStack> 

          <VStack>
            <Text mb={"$3"} fontSize={"$sm"} fontFamily="heading" color={"$gray200"}>Condição</Text>
            <HStack gap={8}>
              <Tag title={"Novo"} defaultState={true} />
              <Tag title={"Usado"} defaultState={true} />
            </HStack>        
          </VStack> 

          <VStack>
            <Text mb={"$1"} fontSize={"$sm"} fontFamily="heading" color={"$gray200"}>Aceita troca?</Text>
            <Switch      
              size="lg"
              alignSelf="flex-start"
              backgroundColor="$transparent"          
              trackColor={{false: "$gray400", true: "$blueLight"}}
              thumbColor="$blueRegular"          
              ios_backgroundColor="$gray200"
              value={acceptExchange} 
              onToggle={handleAcceptExchange}                 
              />
          </VStack>
          
          <Text>Meios de pagamento aceitos</Text>
          <CheckboxGroup
            value={values}
            onChange={(keys) => {
              setValues(keys)
            }}
            >
            <VStack space="md">

              <Checkbox value="Boleto">
                <CheckboxIndicator mr="$2" borderColor="$blueLight" >
                  <CheckboxIcon as={CheckIcon} bgColor="$blueLight" color="$gray600" />
                </CheckboxIndicator >
                <CheckboxLabel>Boleto</CheckboxLabel>
              </Checkbox>

              <Checkbox value="Pix">
                <CheckboxIndicator mr="$2" borderColor="$blueLight">
                  <CheckboxIcon as={CheckIcon} bgColor="$blueLight" color="$gray600" />
                </CheckboxIndicator>
                <CheckboxLabel>Pix</CheckboxLabel>
              </Checkbox>

              <Checkbox value="Dinheiro">
                <CheckboxIndicator mr="$2" borderColor="$blueLight">
                  <CheckboxIcon as={CheckIcon} bgColor="$blueLight" color="$gray600" />
                </CheckboxIndicator>
                <CheckboxLabel>Dinheiro</CheckboxLabel>
              </Checkbox>

              <Checkbox value="Credito">
                <CheckboxIndicator mr="$2" borderColor="$blueLight">
                  <CheckboxIcon as={CheckIcon} bgColor="$blueLight" color="$gray600" />
                </CheckboxIndicator>
                <CheckboxLabel>Cartão de crédito</CheckboxLabel>
              </Checkbox>

              <Checkbox value="Deposito">
                <CheckboxIndicator mr="$2" borderColor="$blueLight">
                  <CheckboxIcon as={CheckIcon} bgColor="$blueLight" color="$gray600" />
                </CheckboxIndicator>
                <CheckboxLabel>Depósito bancário</CheckboxLabel>
              </Checkbox>

            </VStack>
          </CheckboxGroup>

          <Center 
            flexDirection="row" 
            mt="$8"
            gap="$4"
            
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

      </View>

    </Modal>
  );
}

