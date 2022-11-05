import { Box, Text, Link } from "@chakra-ui/react";

export default function Projects({ language }) {
  return (
    <Box pt={2}>
      <Text align="center" fontSize="xl" as="b" color="#FFC000">
        Voting experiments
      </Text>
      <Text align="left" fontSize="md" pl={3}>
        -{" "}
        {
          <Link
            color="#ffcb2c"
            href="https://snapshot.org/#/elfork.eth/proposal/0x2d42bd2fbef83bb96e494c2d923ddab4085274b72e4e4eade052cb2582f6dd07"
          >
            First secret and sybil resistant vote
          </Link>
        }{" "}
        powered by Sismo ZK Badges and Proof of Humanity registry.
      </Text>
      <Text align="left" fontSize="md" pl={8}>
        <Link
          color="#ffcb2c"
          href="https://twitter.com/santisiri/status/1573283518347902976"
        >
          Repercussions at CT.
        </Link>
      </Text>
      <Text align="justify" fontSize="md" pl={3}>
        - Proof of Humanity delegation{" "}
        {
          <Link
            color="#ffcb2c"
            href="https://gov.proofofhumanity.id/t/voting-implementations-research/2441"
          >
            research.
          </Link>
        }
      </Text>
    </Box>
  );
}
