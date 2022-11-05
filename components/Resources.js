import { Grid, GridItem, Box } from "@chakra-ui/react";
import Polygon from "./resources/Polygon";
import Gnosis from "./resources/Gnosis";

export default function Resources({ language }) {
  return (
    <Box py={10} px={25} height="100vh" weight="100vw">
      <Grid templateColumns="repeat(2, 1fr)" gap={1}>
        <GridItem
          w="80%"
          h="100%"
          background="#d9b33e17"
          boxShadow="darklg"
          rounded="md"
        >
          <Polygon language={language} />
        </GridItem>
        <GridItem
          w="80%"
          h="100%"
          background="#d9b33e17"
          boxShadow="darklg"
          rounded="md"
        >
          <Gnosis language={language} />
        </GridItem>
      </Grid>
    </Box>
  );
}
