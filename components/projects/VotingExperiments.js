import { Box, Text, Link } from "@chakra-ui/react";

export default function Projects({ language }) {
  return (
    <Box>
      <Text align="center" fontSize="xl" as="b">
        Voting experiments
      </Text>
      <Text align="left" fontSize="md" pl={3}>
        -{" "}
        {
          <Link
            color="teal.300"
            href="https://snapshot.org/#/elfork.eth/proposal/0x2d42bd2fbef83bb96e494c2d923ddab4085274b72e4e4eade052cb2582f6dd07"
          >
            First secret and sybil resistant vote
          </Link>
        }{" "}
        powered by Sismo ZK Badges and Proof of Humanity registry.
      </Text>
      <Text align="left" fontSize="md" pl={8}>
        <Link
          color="teal.300"
          href="https://twitter.com/santisiri/status/1573283518347902976"
        >
          Repercussions at CT.
        </Link>
      </Text>
      <Text align="justify" fontSize="md" pl={3}>
        - Proof of Humanity delegation{" "}
        {
          <Link
            color="teal.300"
            href="https://gov.proofofhumanity.id/t/voting-implementations-research/2441"
          >
            research.
          </Link>
        }
      </Text>
    </Box>
  );
}
