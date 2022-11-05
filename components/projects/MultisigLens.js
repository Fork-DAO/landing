import { Box, Text, Link } from "@chakra-ui/react";

export default function MultisigLens({ language }) {
  return (
    <Box pt={2}>
      <Text align="center" fontSize="xl" as="b" color="#FFC000">
        Multisig Experiments @ Lens 🌿
      </Text>
      <Text align="left" fontSize="md" pl={3}>
        - Descentralized Community Management on top of Lens.
      </Text>
      <Text align="justify" fontSize="md" pl={3}>
        - First{" "}
        {
          <Link color="#ffcb2c" href="https://lenster.xyz/posts/0xcd33-0x0c">
            Lens post
          </Link>
        }{" "}
        from a multi-sig collected by Stani.lens
      </Text>
      <Text align="justify" fontSize="md" pl={3} pb={2}>
        -{" "}
        <Link color="#ffcb2c" href="https://lenstube.xyz/forkdao.lens">
          Educational videos
        </Link>{" "}
        at Lenstube
      </Text>
    </Box>
  );
}
