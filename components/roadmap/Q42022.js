import { Text, Box, Link, Grid, GridItem } from "@chakra-ui/react";
import {
  EXAMPLES,
  ROADMAP_ANALYSIS_STATUS,
  ROADMAP_COMPLETED_STATUS,
  ROADMAP_IN_PROGRESS_STATUS,
  TWITTER_SPACES_DESCRIPTION,
  TWITTER_SPACES,
  PROTOCOL_RELATIONSHIPS,
  FORK_RADIO_DESCRIPTION,
  GOVERNANCE_DESCRIPTION,
  FORK_RADIO,
  GOVERNANCE,
  COMMUNITY,
  GOVERNOR_SMART_CONTRACT_DESCRIPTION,
  DESCENTRALIZED_FORUM,
  GOVERNOR_SMART_CONTRACT,
  TECHNICAL,
  WHITEPAPER,
  WHITEPAPER_DESCRIPTION,
  DESCENTRALIZED_FORUM_DESCRIPTION,
} from "../../wording/wording";

export default function Q42022({ isMobile, language }) {
  return (
    <Box>
      <p>
        <Text fontSize="3xl" color="#FFC000" as="b" align="center">
          Q4 - 2022
        </Text>
      </p>
      <Grid
        templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
        gap={6}
        borderBottom="2px"
        pt={2}
        pb={5}
      >
        <GridItem
          w="100%"
          h="100%"
          background="#d9b33e17"
          boxShadow="darklg"
          rounded="md"
        >
          <Box>
            <Text py={1}></Text>
            <p>
              <Text fontSize="xl" color="#FFC000" px={4} as="b">
                {PROTOCOL_RELATIONSHIPS[language]}: {TWITTER_SPACES[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="lg" color="white" px={4} as="i">
                {ROADMAP_IN_PROGRESS_STATUS[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="md" color="white" px={4} align="left">
                {TWITTER_SPACES_DESCRIPTION[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="md" color="white" px={4} pb={2} align="left">
                {EXAMPLES[language]}{" "}
                <Link href="https://ubi.eth.limo/">UBI,</Link>{" "}
                <Link href="https://prode.eth.limo/">Prode,</Link>{" "}
                <Link href="https://www.lens.xyz/">Lens,</Link>{" "}
                <Link href="https://proofofhumanity.id/">
                  Proof of Humanity,
                </Link>{" "}
                <Link href="https://yubiai.market/">Yubiai</Link>.
              </Text>
            </p>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          h="100%"
          background="#d9b33e17"
          boxShadow="darklg"
          rounded="md"
        >
          <Box>
            <Text py={1}></Text>
            <p>
              <Text fontSize="xl" color="#FFC000" px={4} as="b">
                {COMMUNITY[language]}: {FORK_RADIO[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="lg" color="white" px={4} as="i">
                {ROADMAP_IN_PROGRESS_STATUS[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="md" color="white" px={4} pb={2} align="left">
                {FORK_RADIO_DESCRIPTION[language]}
              </Text>
            </p>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          h="100%"
          background="#d9b33e17"
          boxShadow="darklg"
          rounded="md"
        >
          <Box>
            <p>
              <Text py={1}></Text>
              <Text fontSize="xl" color="#FFC000" px={4} as="b">
                {COMMUNITY[language]}: {GOVERNANCE[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="lg" color="white" px={4} as="i">
                {ROADMAP_ANALYSIS_STATUS[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="md" color="white" px={4} pb={2} align="left">
                {GOVERNANCE_DESCRIPTION[language]}
              </Text>
            </p>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          h="100%"
          background="#d9b33e17"
          boxShadow="darklg"
          rounded="md"
        >
          <Box pb={2}>
            <p>
              <Text py={1}></Text>
              <Text fontSize="xl" color="#FFC000" px={4} as="b">
                {COMMUNITY[language]}: {WHITEPAPER[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="lg" color="white" px={4} as="i">
                {ROADMAP_IN_PROGRESS_STATUS[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="md" color="white" px={4} pt={10} align="left">
                {WHITEPAPER_DESCRIPTION[language]}
              </Text>
            </p>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          h="100%"
          background="#d9b33e17"
          boxShadow="darklg"
          rounded="md"
        >
          <Box pb={2}>
            <p>
              <Text py={1}></Text>
              <Text fontSize="xl" color="#FFC000" px={4} as="b">
                {TECHNICAL[language]}: {GOVERNOR_SMART_CONTRACT[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="lg" color="white" px={4} as="i">
                {ROADMAP_COMPLETED_STATUS[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="md" color="white" px={4} align="left">
                {GOVERNOR_SMART_CONTRACT_DESCRIPTION[language]}
              </Text>
            </p>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          h="100%"
          background="#d9b33e17"
          boxShadow="darklg"
          rounded="md"
        >
          <Box pb={3}>
            <Text py={1}></Text>
            <p>
              <Text fontSize="xl" color="#FFC000" px={4} as="b">
                {TECHNICAL[language]}: {DESCENTRALIZED_FORUM[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="lg" color="white" px={4} as="i">
                {ROADMAP_ANALYSIS_STATUS[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="md" color="white" px={4} align="left">
                {DESCENTRALIZED_FORUM_DESCRIPTION[language]}
              </Text>
            </p>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
