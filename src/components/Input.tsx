import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react-native';
import {
  Button,
  useStyled,
  FormControl,
  FormControlError,
  FormControlErrorText,
  Input as GluestackInput,
  InputField,
} from '@gluestack-ui/themed';

import { ComponentProps } from 'react';

type Props = ComponentProps<typeof InputField> & {
  errorMessage?: string | null;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  visibilityControl?: boolean;  
};

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  visibilityControl = false,
  secureTextEntry = false,  
  ...props
}: Props) {

  const [showPassword, setShowPassword] = useState(false);  
  const styled = useStyled();
  const invalid = !!errorMessage || isInvalid;

  const changeTextVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <FormControl isInvalid={invalid} mb="$2" w="$full">
      <GluestackInput
        isInvalid={isInvalid}
        h="$12"
        borderWidth="$0"
        borderRadius="$md"
        alignItems="center"
        justifyContent="flex-end"
        $focus={{
          borderWidth: 1,
          borderColor: invalid ? '$red700' : '$gray400',
        }}
        $invalid={{
          borderWidth: 1,
          borderColor: '$red500',
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
      >
        <InputField
          h="$full"
          px="$4"
          bg="$gray700"
          color="$gray300"
          fontFamily="$body"
          placeholderTextColor="$gray400"
          secureTextEntry={!showPassword}
          {...props}
        />
        {visibilityControl && (
          <Button 
            w={20} h={32}            
            bg="none"
            position='absolute' 
            right={16}
            onPress={changeTextVisibility}
          >
            {!showPassword ? (
              <Eye color={styled.config.tokens.colors.gray300} />
            ) : (
              <EyeOff color={styled.config.tokens.colors.gray300} />
            )}
          </Button>
        )}
      </GluestackInput>

      {errorMessage && (
        <FormControlError>
          <FormControlErrorText color="$red700">
            {errorMessage}
          </FormControlErrorText>
        </FormControlError>
      )}
    </FormControl>
  );
}
