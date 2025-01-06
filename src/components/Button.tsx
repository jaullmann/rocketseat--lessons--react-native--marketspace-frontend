import { Plus, Power, TrashSimple, ArrowLeft, Tag, WhatsappLogo } from "phosphor-react-native";
import { useStyled, ButtonSpinner, Button as GluestackButton, Text, HStack } from '@gluestack-ui/themed';
import { ComponentProps } from 'react'

type IconVariantProps = 'plus' | 'power' | 'delete' | 'goBack' | 'tag' | 'contact';

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  style?: 'regular' | 'gray' | 'blue';
  icon?: null | IconVariantProps;
  isLoading?: boolean;
}

type IconProps = {
  icon: null | IconVariantProps;
  style: string;
}

export function Button({ title, style = 'regular', icon = null, isLoading = false, ...props }: Props) {

  const styled = useStyled();

  function iconSelect({ icon, style }: IconProps) {
    let iconColor = style === 'gray' ? styled.config.tokens.colors.gray300 : styled.config.tokens.colors.gray600;
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

  return (
    <GluestackButton
      w="$full"
      h="$12"
      bg={style === 'regular' ? '$gray100' : style === 'gray' ? '$gray500' : '$blueRegular'}
      rounded="$md"
      $active-bg={style === 'regular' ? '$gray200' : style === 'gray' ? '$gray700' : '$blueRegular'}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <HStack gap={8} alignItems="center">
          {iconSelect({ icon, style })}
          <Text
            color={style === 'regular' || style === 'blue' ? '$gray700' : '$gray200'} 
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
