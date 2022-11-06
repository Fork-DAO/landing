import { Grid, GridItem, Box, Text, Link } from "@chakra-ui/react";
import TwitterSpaces from "./TwitterSpaces";
import MultisigLens from "./MultisigLens";
import VotingExperiments from "./VotingExperiments";

export default function ProjectsMobile({ language }) {
  return (
    <Box>
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <GridItem background="#d9b33e17" boxShadow="darklg" rounded="md">
          <TwitterSpaces language={language} />
        </GridItem>
        <GridItem background="#d9b33e17" boxShadow="darklg" rounded="md">
          <MultisigLens language={language} />
        </GridItem>
        <GridItem background="#d9b33e17" boxShadow="darklg" rounded="md">
          <VotingExperiments language={language} />
        </GridItem>
      </Grid>
    </Box>
  );
}
