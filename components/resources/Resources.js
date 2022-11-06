import { Grid, GridItem, Box } from "@chakra-ui/react";
import Polygon from "./Polygon";
import Gnosis from "./Gnosis";
import Mainnet from "./Mainnet";

export default function Resources({ language }) {
  return (
    <Box py={10} px={25} height="100vh" w={["10vw", "100vw", "100vw"]}>
      <Grid templateColumns="repeat(3, 1fr)" gap={10}>
        <GridItem
          w="100%"
          h="100%"
          background="#d9b33e17"
          boxShadow="darklg"
          rounded="md"
        >
          <Mainnet language={language} />
        </GridItem>
        <GridItem
          w="100%"
          h="100%"
          background="#d9b33e17"
          boxShadow="darklg"
          rounded="md"
        >
          <Polygon language={language} />
        </GridItem>
        <GridItem
          w="100%"
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
