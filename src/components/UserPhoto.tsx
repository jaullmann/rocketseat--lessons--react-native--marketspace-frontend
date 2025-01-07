import { UserRound, PencilLine } from "lucide-react-native";
import { Image, Center, Button, useStyled } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type ImageProps = ComponentProps<typeof Image>;
type ButtonProps = ComponentProps<typeof Button>;

type Props = {
  uri: string | null;
  imageProps?: Omit<ImageProps, "source">; // Exclude 'source' to avoid conflicts
  buttonProps?: ButtonProps; // Props for the Button component
};

export function UserPhoto({ uri = null, imageProps, buttonProps }: Props) {
  const styled = useStyled();

  return (
    <Center>
      {uri ? (
        <Image
          w={92}
          h={92}
          source={{ uri }} // Corrected source
          alt="Imagem do usuário"
          rounded="$full"
          borderWidth={3}
          borderColor="$blueLight"
          backgroundColor="$gray500"
          {...imageProps} // Spread additional Image props
        />
      ) : (
        <Center
          w={92}
          h={92}
          rounded="$full"
          borderWidth={3}
          borderColor="$blueLight"
          backgroundColor="$gray500"
          alignContent="center"
        >
          <UserRound size={52} color={styled.config.tokens.colors.gray400} />
        </Center>
      )}

      <Button
        position="absolute"
        left={62}
        top={52}
        w={40}
        h={40}
        rounded="$full"
        backgroundColor="$blueLight"
        alignContent="center"
        {...buttonProps} // Spread additional Button props
      >
        <PencilLine size={22} color={styled.config.tokens.colors.white} />
      </Button>
    </Center>
  );
}
