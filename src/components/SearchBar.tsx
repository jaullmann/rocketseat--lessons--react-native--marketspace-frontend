import { HStack, Input, InputField, Box, useStyled } from "@gluestack-ui/themed"
import { Search, SlidersVertical } from 'lucide-react-native';
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof InputField> & {
  inputText: string;
  placeholder: string;
  onPressSearch?: () => void,
  onPressFilter?: () => void
}

export function SearchBar({ inputText, placeholder, onPressSearch, onPressFilter, ...props }: Props) {
  const styled = useStyled();

  return (
    <Input
      w={"$full"}
      h={46}  
      px={16}    
      py={12}
      gap={12}
      borderWidth={0}
      bg={"$gray700"}
      rounded="$md"
      alignItems="center"
    >
      <InputField
        flex={1}
        px={0}        
        h={46}
        borderWidth={0}
        alignItems="center"
        fontFamily="$body"
        fontSize={"$md"}
        value={inputText}
        placeholder={placeholder}
        placeholderTextColor="$gray400"
        {...props}
      />
      <Search size={20} color={styled.config.tokens.colors.gray200} onPress={onPressSearch} />
      <Box h={20} borderLeftWidth={1} borderColor="$gray400" />
      <SlidersVertical size={20} color={styled.config.tokens.colors.gray200} onPress={onPressFilter} />
    </Input>
  )
}