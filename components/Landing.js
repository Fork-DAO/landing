import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Landing({ onLanguageSelected }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      bg="black"
    >
      <Grid>
        <Image src="/forkdao-logo.png" />
        <Flex py="5" justifyContent="center" alignItems="center" fontSize="6xl">
          <Box px="5">
            <a href="#" onClick={() => onLanguageSelected("es")}>
              🇪🇸
            </a>
          </Box>
          <Box>
            <a href="#" onClick={() => onLanguageSelected("en")}>
              🏴󠁧󠁢󠁥󠁮󠁧󠁿
            </a>
          </Box>
        </Flex>
      </Grid>
    </Flex>
  );
}
