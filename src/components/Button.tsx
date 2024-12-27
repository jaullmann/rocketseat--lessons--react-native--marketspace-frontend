import { Plus, Power, TrashSimple, ArrowLeft, Tag, WhatsappLogo } from "phosphor-react-native";
import { ButtonSpinner, Button as GluestackButton, Text, HStack } from '@gluestack-ui/themed';
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  color?: 'regular' | 'gray' | 'blue';
  icon?: 'none' | 'plus' | 'power' | 'delete' | 'goBack' | 'tag' | 'contact';
  isLoading?: boolean;
}

type IconProps = {
  icon: string;
  color: string;
}

function iconSelect({ icon, color }: IconProps) {
  let iconColor = color === 'gray' ? '$gray300' : '$gray600';
  let resolvedColor = iconColor;
  switch (icon) {
    case "plus":
      return <Plus color={resolvedColor} size={16} />;
    case "power":
      return <Power color={resolvedColor} size={16} />;
    case "delete": 
      return <TrashSimple color={resolvedColor} size={16} />;
    case "goBack":
      return <ArrowLeft color={resolvedColor} size={16} />;
    case "tag":
      return <Tag color={resolvedColor} size={16} />;
    case "contact":
      return <WhatsappLogo color={resolvedColor} size={16} />;
    default:
      return null;
  }
}

export function Button({ title, color = 'regular', icon = 'none', isLoading = false, ...props }: Props) {
  return (
    <GluestackButton
      w="$full"
      h="$12"
      bg={color === 'regular' ? '$gray100' : color === 'gray' ? '$gray500' : '$blueRegular'}
      rounded="$md"
      $active-bg={color === 'regular' ? '$gray200' : color === 'gray' ? '$gray600' : '$blueRegular'}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <HStack gap={8} alignItems="center">
          {iconSelect({ icon, color })}
          <Text
            color={color === 'regular' || color === 'blue' ? '$gray700' : '$gray200'} 
            fontFamily="$heading"
            fontSize="$sm"
          >
            {title}
          </Text>
        </HStack>
      )}
    </GluestackButton>
  );
}
