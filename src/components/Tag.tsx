import { useState } from "react";

import { Text, HStack, Button, useStyled, Pressable } from "@gluestack-ui/themed";
import { X } from "lucide-react-native";

type Props = {
  title: string;
  defaultState?: boolean;
}

export function Tag({ title, defaultState = true }: Props) {

  const [isActive, setIsActive] = useState(defaultState);

  const styled = useStyled();

  function handleTagState(){
    setIsActive(!isActive);
  }

  return (
    <Pressable onPress={handleTagState}>
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