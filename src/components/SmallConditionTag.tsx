import { Text, Center } from "@gluestack-ui/themed"
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Text> & {
  isNew: boolean
}

export function SmallConditionTag({ isNew, ...props }: Props){
  return(
    <Center alignSelf="flex-start">
      <Text 
        bg="$gray500" 
        rounded={"$full"}
        px={"$2"}
        py={"$0.5"}
        color={"$gray200"} 
        fontFamily="$heading" 
        fontSize={"$2xs"} 
        textTransform="uppercase"
        {...props}
      >
        {isNew ? 'novo' : 'usado'}
      </Text>
    </Center>
  )
}