import { Box, Text, Link } from "@chakra-ui/react";
import {
  FIRST_VOTE,
  POH_DELEGATION,
  POWERED_BY_SISMO_POH,
  REPERCUSSIONS_AT_CT,
  RESEARCH,
  VOTING_EXPERIMENTS,
} from "../../wording/wording";

export default function Projects({ language }) {
  return (
    <Box pt={2} pb={2}>
      <Text align="center" fontSize="xl" as="b" color="#FFC000">
        {VOTING_EXPERIMENTS[language]}
      </Text>
      <Text align="left" fontSize="md" pl={3}>
        -{" "}
        {
          <Link
            color="#ffcb2c"
            href="https://snapshot.org/#/elfork.eth/proposal/0x2d42bd2fbef83bb96e494c2d923ddab4085274b72e4e4eade052cb2582f6dd07"
          >
            {FIRST_VOTE[language]}
          </Link>
        }{" "}
        {POWERED_BY_SISMO_POH[language]}
      </Text>
      <Text align="left" fontSize="md" pl={8}>
        <Link
          color="#ffcb2c"
          href="https://twitter.com/santisiri/status/1573283518347902976"
        >
          {REPERCUSSIONS_AT_CT[language]}
        </Link>
      </Text>
      <Text align="left" fontSize="md" pl={3}>
        -{" "}
        {
          <Link
            color="#ffcb2c"
            href="https://gov.proofofhumanity.id/t/voting-implementations-research/2441"
          >
            {RESEARCH[language]}
          </Link>
        }{" "}
        {POH_DELEGATION[language]}
      </Text>
    </Box>
  );
}
