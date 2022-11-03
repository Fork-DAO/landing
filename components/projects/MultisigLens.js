import { Box, Text, Link } from "@chakra-ui/react";

export default function Projects({ language }) {
  return (
    <Box>
      <Text align="center" fontSize="xl" as="b">
        Multisig Experiments @ Lens 🌿
      </Text>
      <Text align="left" fontSize="md" pl={3}>
        - Descentralized Community Management on top of Lens.
      </Text>
      <Text align="justify" fontSize="md" pl={3}>
        - First{" "}
        {
          <Link color="teal.300" href="https://lenster.xyz/posts/0xcd33-0x0c">
            Lens post
          </Link>
        }{" "}
        from a multi-sig collected by Stani.lens
      </Text>
      <Text align="justify" fontSize="md" pl={3}>
        -{" "}
        <Link color="teal.300" href="https://lenstube.xyz/forkdao.lens">
          Educational videos
        </Link>{" "}
        at Lenstube
      </Text>
    </Box>
  );
}
