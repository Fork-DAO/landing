import { Box, Flex, Grid, Image } from "@chakra-ui/react";

export default function Landing({ onLanguageSelected }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      bgGradient="linear(to-br, #1f514e, #709c81)"
    >
      <Grid>
        <Image src="/forkdao-logo.png" alt="" />
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
