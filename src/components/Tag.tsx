import { Text, HStack, Button } from "@gluestack-ui/themed";
import { X } from "lucide-react-native";

type Props = {
  used: boolean;
  onClose: () => void;
}

export function Tag({ used, onClose }: Props) {
  return (
    <HStack
      bg={used ? "$gray500" : "$blueLight"}
      h={28}
      w={used ? 72 : 76}
      px="$6"
      py="$1"
      rounded="$full"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        textTransform="uppercase"
        color={used ? "$white" : "$gray300"}
        fontSize="$xs"
        fontWeight="$heading"
      >
        {used ? "Usado" : "Novo"}
      </Text>
      {
        !used && (
          <Button
            onPress={onClose}
            alignItems="center"
            justifyContent="center"
            bg="$white"
            rounded="$full"          
            h={16}
            w={16}          
          >
            <X size={12} color="$blueLight" />
          </Button>
        )
      }
    </HStack>
  )
}