import { Flex } from "@chakra-ui/react";

export default function BodyContainer({ children }) {
  return (
    <Flex
      bgGradient="linear(to-br, #1f514e, #709c81)"
      width="100vw"
      py="1"
      shadow="lg"
      textAlign="justify"
    >
      {children}
    </Flex>
  );
}
