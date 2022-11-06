import { Flex } from "@chakra-ui/react";

export default function BodyContainer({ children }) {
  return (
    <Flex
      bgGradient="linear(to-br, #000000, #5a535c)"
      width="100vw"
      py={1}
      shadow="lg"
      textAlign="justify"
    >
      {children}
    </Flex>
  );
}
