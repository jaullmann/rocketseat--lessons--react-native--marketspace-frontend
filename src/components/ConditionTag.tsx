import { Text, HStack, useStyled, Pressable } from "@gluestack-ui/themed";
import { X } from "lucide-react-native";

type Props = {
  title: string;
  onPress: () => void;
  isActive: boolean;
}

export function ConditionTag({ title, onPress, isActive }: Props) {  

  const styled = useStyled();

  return (
    <Pressable onPress={onPress}>
      <HStack
        bg={isActive ? "$blueLight" : "$gray300"}
        h={28}
        w={76}
        px="$2"
        py="$1"
        gap="$1"
        rounded="$full"
        alignItems="center"
        justifyContent={isActive ? "space-around" : "center"}
      >
        <Text
          textTransform="uppercase"
          color={isActive ? "$gray500" : "$white"}
          fontSize="$xs"
          fontWeight="$heading"
        >
          {title}
        </Text>
        {
          isActive && (
            <HStack              
              alignItems="center"
              justifyContent="space-between"
              bg="$white"
              rounded="$full"          
              h={16}
              w={16}          
            >
              <X size={14} color={styled.config.tokens.colors.blueLight} />
            </HStack>
          )
        }
      </HStack>
    </Pressable>
  )
}