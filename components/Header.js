import { Center, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Flex
        justifyContent="space-between"
        bg="black"
        color="white"
        px={5}
        py={1}
      >
        <Center>
          <Link href="/">
            <Image
              src="/logo-nuevo-7.png"
              pt={2}
              alt=""
              width="100"
              height="39"
            />
          </Link>
        </Center>
        <Center px="5">
          <a href="https://twitter.com/elfork_eth">
            <Image
              src="/twitter-logo.svg"
              alt=""
              boxSize="20px"
              margin="2px"
              colo="white"
            />
          </a>
          <a href="https://t.me/forkdaoes">
            <Image
              src="/telegram-logo.svg"
              alt=""
              boxSize="20px"
              margin="2px"
            />
          </a>
        </Center>
      </Flex>
    </header>
  );
}
