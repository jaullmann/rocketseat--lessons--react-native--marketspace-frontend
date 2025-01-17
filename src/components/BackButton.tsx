// import { useNavigation } from "@react-navigation/native";
import { useStyled } from '@gluestack-ui/themed';
import { Button } from "@gluestack-ui/themed";
import { ArrowLeft } from "lucide-react-native";
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Button>

export function BackButton({ ...props }: Props) {
  // const navigation = useNavigation();
  const styled = useStyled();

  return (
    <Button 
      mt={"$16"}
      w={"$6"}
      h={"$8"}      
      bg="$transparent"
      // onPress={() => navigation.goBack()}
      {...props}
    >
      <ArrowLeft size={24} color={styled.config.tokens.colors.gray100} />
    </Button>
  );
}