import { Center, Flex, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
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
              src="/logoforkdao.png"
              pt={2}
              alt=""
              width="100"
              height="39"
              onClick={() => router.reload(window.location.pathname)}
            />
          </Link>
        </Center>
        <Center px="5">
          <a href="https://www.instagram.com/fork.dao/">
            <Image 
              src="/instagram-logo.svg" 
              alt="" 
              boxSize="20px" 
              margin="4px" 
            />
          </a>
          <a href="https://twitter.com/forkdaoes">
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
