import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { ABOUT_US, ROADMAP, PROJECTS, RESOURCES } from "../wording/wording";

export default function Header({ language }) {
  return (
    <header>
      <Flex
        justifyContent="space-between"
        bg="#1e935c"
        color="white"
        px={10}
        py={6}
      >
        <Center>
          <a href="/">
            <Text fontSize="3xl" fontWeight="bold">
              Fork DAO
            </Text>
          </a>
        </Center>
        <Flex direction="vertical">
          <a href="/about-us">
            <Box fontSize="xl" fontWeight="bold" px="2" py="2" rounded="lg">
              {ABOUT_US[language]}
            </Box>
          </a>
          <a href="/roadmap">
            <Box fontSize="xl" fontWeight="bold" px="2" py="2" rounded="lg">
              {ROADMAP[language]}
            </Box>
          </a>
          <a href="/projects">
            <Box fontSize="xl" fontWeight="bold" px="2" py="2" rounded="lg">
              {PROJECTS[language]}
            </Box>
          </a>
          <a href="/resources">
            <Box fontSize="xl" fontWeight="bold" px="2" py="2" rounded="lg">
              {RESOURCES[language]}
            </Box>
          </a>
        </Flex>
        <Center>
          <Image src="/twitter-logo.svg" boxSize="20px" margin="2px" />
          <Image src="/telegram-logo.svg" boxSize="20px" margin="2px" />
        </Center>
      </Flex>
    </header>
  );
}
