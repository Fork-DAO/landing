import { Grid, GridItem, Box, Text, Link } from "@chakra-ui/react";
import Polygon from "./resources/Polygon";
import Gnosis from "./resources/Gnosis";

export default function Resources({ language }) {
  return (
    <Box py={10} px={25} height="100vh" weight="100vw">
      <Grid templateColumns="repeat(2, 1fr)" gap={1}>
        <GridItem
          w="80%"
          h="100%"
          background="#38ab7c17"
          boxShadow="darklg"
          rounded="md"
        >
          <Polygon />
        </GridItem>
        <GridItem
          w="80%"
          h="100%"
          background="#38ab7c17"
          boxShadow="darklg"
          rounded="md"
        >
          <Gnosis />
        </GridItem>
      </Grid>
    </Box>
  );
}
