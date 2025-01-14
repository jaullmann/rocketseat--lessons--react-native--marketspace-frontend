import { useState } from "react";

import { Text, HStack, Button } from "@gluestack-ui/themed";
import { X } from "lucide-react-native";

type Props = {
  title: string;
}

export function Tag({ title }: Props) {

  const [isActive, setIsActive] = useState(true);

  function handleTagState(){
    setIsActive(!isActive);
  }

  return (
    <HStack
      bg={isActive ? "$gray300" : "$blueLight"}
      h={28}
      w={90}
      px="$6"
      py="$1"
      rounded="$full"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        textTransform="uppercase"
        color={isActive ? "$white" : "$gray500"}
        fontSize="$xs"
        fontWeight="$heading"
      >
        {title}
      </Text>
      {
        !isActive && (
          <Button
            onPress={handleTagState}
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