import { Spinner, Center } from "@gluestack-ui/themed";

export function Loading(){
  return(
  <Center flex={1} bg='$gray600'>
    <Spinner color='$blue500' size='large' />
  </Center>
  )
}