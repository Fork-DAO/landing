import { Box, Flex, Grid, Image } from "@chakra-ui/react";

export default function Landing({ onLanguageSelected }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      bgGradient="linear(to-br, #000000, #5a535c)"
    >
      <Grid>
        <Image src="/logo-nuevo-7.png" alt="" width="400px" />
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
