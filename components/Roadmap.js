import { Text, Box, Link } from "@chakra-ui/react";
import {
  EXAMPLES,
  ROADMAP_ANALYSIS_STATUS,
  ROADMAP_COMPLETED_STATUS,
  ROADMAP_IN_PROGRESS_STATUS,
  GRANTS_DESCRIPTION,
  GRANTS,
  FUNDING,
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
  ROADMAP_TO_DO_STATUS,
  DEVELOPMENT,
  DEVELOPMENT_DESCRIPTION,
  WHITEPAPER,
  WHITEPAPER_DESCRIPTION,
  DESCENTRALIZED_FORUM_DESCRIPTION,
} from "../wording/wording";

export default function Roadmap({ language }) {
  return (
    <Box py={10} px={50} align="left">
      <p>
        <Text fontSize="3xl" color="white" as="b">
          Q4 - 2022
        </Text>
      </p>
      <p>
        <Text fontSize="2xl" color="white">
          {"->"} {PROTOCOL_RELATIONSHIPS[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="b">
          {TWITTER_SPACES[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="i">
          {ROADMAP_IN_PROGRESS_STATUS[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} align="justify">
          {TWITTER_SPACES_DESCRIPTION[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} align="justify">
          {EXAMPLES[language]} <Link href="https://ubi.eth.limo/">UBI,</Link>{" "}
          <Link href="https://prode.eth.limo/">Prode,</Link>{" "}
          <Link href="https://www.lens.xyz/">Lens,</Link>{" "}
          <Link href="https://proofofhumanity.id/">Proof of Humanity,</Link>{" "}
          <Link href="https://yubiai.market/">Yubiai</Link>.
        </Text>
      </p>
      <p>
        <Text fontSize="2xl" color="white">
          {"->"} {COMMUNITY[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="b">
          {FORK_RADIO[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="i">
          {ROADMAP_IN_PROGRESS_STATUS[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} align="justify">
          {FORK_RADIO_DESCRIPTION[language]}
        </Text>
      </p>
      <p>
        <Text py={1}></Text>
        <Text fontSize="xl" color="white" px={4} as="b">
          {WHITEPAPER[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="i">
          {ROADMAP_IN_PROGRESS_STATUS[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} align="justify">
          {WHITEPAPER_DESCRIPTION[language]}
        </Text>
      </p>
      <p>
        <Text py={1}></Text>
        <Text fontSize="xl" color="white" px={4} as="b">
          {GOVERNANCE[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="i">
          {ROADMAP_ANALYSIS_STATUS[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} align="justify">
          {GOVERNANCE_DESCRIPTION[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="2xl" color="white">
          {"->"} {TECHNICAL[language]}
        </Text>
      </p>
      <p>
        <Text py={1}></Text>
        <Text fontSize="xl" color="white" px={4} as="b">
          {GOVERNOR_SMART_CONTRACT[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="i">
          {ROADMAP_COMPLETED_STATUS[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} align="justify">
          {GOVERNOR_SMART_CONTRACT_DESCRIPTION[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="b">
          {DESCENTRALIZED_FORUM[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="i">
          {ROADMAP_ANALYSIS_STATUS[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} align="justify">
          {DESCENTRALIZED_FORUM_DESCRIPTION[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="3xl" color="white" as="b">
          Q1 - 2023
        </Text>
      </p>
      <p>
        <Text fontSize="2xl" color="white">
          {"->"} {FUNDING[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="b">
          {GRANTS[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="i">
          {ROADMAP_TO_DO_STATUS[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} align="justify">
          {GRANTS_DESCRIPTION[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="2xl" color="white">
          {"->"} {TECHNICAL[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="b">
          {DEVELOPMENT[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} as="i">
          {ROADMAP_TO_DO_STATUS[language]}
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white" px={4} align="justify">
          {DEVELOPMENT_DESCRIPTION[language]}
        </Text>
      </p>
    </Box>
  );
}
