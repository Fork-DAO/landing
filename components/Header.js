import { Center, Flex, Image, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <header>
      <Flex
        justifyContent="space-between"
        bgGradient="linear(to-br, teal.600, green.500)"
        color="white"
        px={5}
        py={1}
      >
        <Center>
          <a href="/">
            <Text fontSize="3xl" fontWeight="bold">
              Fork DAO
            </Text>
          </a>
        </Center>
        <Center px="5">
          <a href="https://twitter.com/elfork_eth">
            <Image src="/twitter-logo.svg" boxSize="20px" margin="2px" />
          </a>
          <a href="https://t.me/forkdaoes">
            <Image src="/telegram-logo.svg" boxSize="20px" margin="2px" />
          </a>
        </Center>
      </Flex>
    </header>
  );
}
