import { Grid, GridItem, Box, Text, Link } from "@chakra-ui/react";
import TwitterSpaces from "./projects/TwitterSpaces";
import MultisigLens from "./projects/MultisigLens";
import VotingExperiments from "./projects/VotingExperiments";

export default function Projects({ language }) {
  return (
    <Box py={10} px={25} height="100vh" weight="100vw">
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <GridItem
          w="80%"
          h="100%"
          background="#38ab7c17"
          boxShadow="darklg"
          rounded="md"
        >
          <TwitterSpaces />
        </GridItem>
        <GridItem
          w="80%"
          h="100%"
          background="#38ab7c17"
          boxShadow="darklg"
          rounded="md"
        >
          <MultisigLens />
        </GridItem>
        <GridItem
          w="80%"
          h="100%"
          background="#38ab7c17"
          boxShadow="darklg"
          rounded="md"
        >
          <VotingExperiments />
        </GridItem>
      </Grid>
    </Box>
  );
}
