import { Text, Box, Grid, GridItem } from "@chakra-ui/react";
import {
  GRANTS_DESCRIPTION,
  GRANTS,
  FUNDING,
  TECHNICAL,
  ROADMAP_TO_DO_STATUS,
  DEVELOPMENT,
  DEVELOPMENT_DESCRIPTION,
} from "../../wording/wording";

export default function Q12023({ language }) {
  return (
    <Box>
      <p>
        <Text fontSize="3xl" color="#FFC000" as="b" align="center">
          Q1 - 2023
        </Text>
      </p>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} pt={2} pb={5}>
        <GridItem
          w="100%"
          h="100%"
          background="#d9b33e17"
          boxShadow="darklg"
          rounded="md"
          pb={2}
        >
          <Box>
            <Text py={1}></Text>
            <p>
              <Text fontSize="xl" color="#FFC000" px={4} as="b">
                {FUNDING[language]} - {GRANTS[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="xl" color="white" px={4} as="i">
                {ROADMAP_TO_DO_STATUS[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="xl" color="white" px={4} align="left">
                {GRANTS_DESCRIPTION[language]}
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
                {TECHNICAL[language]} - {DEVELOPMENT[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="xl" color="white" px={4} as="i">
                {ROADMAP_TO_DO_STATUS[language]}
              </Text>
            </p>
            <p>
              <Text fontSize="xl" color="white" px={4} align="left">
                {DEVELOPMENT_DESCRIPTION[language]}
              </Text>
            </p>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
