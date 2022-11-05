import { Box, Text, Link } from "@chakra-ui/react";
import {
  EDUCATIONAL_VIDEOS,
  LENS_POST,
  MULTISIG_CM,
  MULTISIG_EXPERIMENTS,
  MULTISIG_FIRST,
  STANI_COLLECT,
} from "../../wording/wording";

export default function MultisigLens({ language }) {
  return (
    <Box pt={2}>
      <Text align="center" fontSize="xl" as="b" color="#FFC000">
        {MULTISIG_EXPERIMENTS[language]} @ Lens 🌿
      </Text>
      <Text align="left" fontSize="md" pl={3}>
        - {MULTISIG_CM[language]}
      </Text>
      <Text align="left" fontSize="md" pl={3}>
        - {MULTISIG_FIRST[language]}{" "}
        {
          <Link color="#ffcb2c" href="https://lenster.xyz/posts/0xcd33-0x0c">
            {LENS_POST[language]}
          </Link>
        }{" "}
        {STANI_COLLECT[language]}
      </Text>
      <Text align="left" fontSize="md" pl={3} pb={2}>
        -{" "}
        <Link color="#ffcb2c" href="https://lenstube.xyz/forkdao.lens">
          {EDUCATIONAL_VIDEOS[language]}
        </Link>{" "}
        (Lenstube)
      </Text>
    </Box>
  );
}
