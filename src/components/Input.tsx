import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  Input as GluestackInput,
  InputField,
} from '@gluestack-ui/themed'

import { ComponentProps } from 'react'

type Props = ComponentProps<typeof InputField> & {
  errorMessage?: string | null
  isInvalid?: boolean
  isReadOnly?: boolean
}

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  ...props
}: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb="$2" w="$full">
      <GluestackInput
        isInvalid={isInvalid}
        h="$12"
        borderWidth="$0"
        borderRadius="$md"
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
          px="$4"
          bg="$gray700"
          color="$gray300"
          fontFamily="$body"
          placeholderTextColor="$gray400"
          {...props}
        />
      </GluestackInput>

      <FormControlError>
        <FormControlErrorText color="$red700">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}