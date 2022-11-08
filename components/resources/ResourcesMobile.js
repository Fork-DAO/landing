import { Grid, GridItem, Box } from "@chakra-ui/react";
import Polygon from "./Polygon";
import Gnosis from "./Gnosis";
import Mainnet from "./Mainnet";

export default function ResourcesMobile({ language }) {
  return (
    <Box height="100vh">
      <Grid templateColumns="repeat(1, 1fr)" gap={10}>
        <GridItem background="#d9b33e17" boxShadow="darklg" rounded="md">
          <Mainnet language={language} />
        </GridItem>
        <GridItem background="#d9b33e17" boxShadow="darklg" rounded="md">
          <Polygon language={language} />
        </GridItem>
        <GridItem background="#d9b33e17" boxShadow="darklg" rounded="md">
          <Gnosis language={language} />
        </GridItem>
      </Grid>
    </Box>
  );
}
