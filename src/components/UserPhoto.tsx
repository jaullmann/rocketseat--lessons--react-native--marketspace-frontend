import { UserRound, PencilLine } from "lucide-react-native";
import { Image, Center, Button, useStyled } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type ImageProps = ComponentProps<typeof Image>;
type ButtonProps = ComponentProps<typeof Button>;
type SizeProps = "sm" | "md" | "xl";

type Props = {
  uri: string | null;
  size: SizeProps,
  imageProps?: Omit<ImageProps, "source">; // Exclude 'source' to avoid conflicts
  buttonProps?: ButtonProps; // Props for the Button component
};

export function UserPhoto({ uri = null, size = "sm", imageProps, buttonProps }: Props) {
  const styled = useStyled();

  function setPhotoSize(size: string): number {
    switch (size) {
    case "sm":
      return 24
    case "md":
      return 45
    case "xl":
      return 92
    default:
      return 24
    }
  }
  
  function setBorderSize(size: string): number {
    switch (size) {
    case "sm":
      return 1
    case "md":
      return 2
    case "xl":
      return 3
    default:
      return 1
    }
  }  

  function setAvatarSize(size: string): number {
    switch (size) {
    case "sm":
      return 12
    case "md":
      return 24
    case "xl":
      return 52
    default:
      return 1
    }
  }  

  return (
    <Center mb={'$3'}>
      {uri ? (
        <Image
          w={setPhotoSize(size)}
          h={setPhotoSize(size)}
          source={{ uri }} // Corrected source
          alt="Imagem do usuário"
          rounded="$full"
          borderWidth={setBorderSize(size)}
          borderColor="$blueLight"
          backgroundColor="$gray500"
          {...imageProps} // Spread additional Image props
        />
      ) : (
        <Center
          w={setPhotoSize(size)}
          h={setPhotoSize(size)}
          rounded="$full"
          borderWidth={setBorderSize(size)}
          borderColor="$blueLight"
          backgroundColor="$gray500"
          alignContent="center"
        >
          <UserRound size={setAvatarSize(size)} color={styled.config.tokens.colors.gray400} />
        </Center>
      )}

      {
        size === 'xl' &&
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
      }   
    </Center>
  );
}
