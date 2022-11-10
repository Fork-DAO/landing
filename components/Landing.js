import { Box, Flex, Grid, Image } from "@chakra-ui/react";

export default function Landing({ onLanguageSelected }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100vw"
      height="100vh"
      bgGradient="linear(to-br, #000000, #5a535c)"
    >
      <Grid>
        <Image src="/logoforkdao.png" alt="" w={["300px", "350px", "400px"]} />
        <Flex py="5" justifyContent="center" alignItems="center" fontSize="6xl">
          <Box px="5">
            <a href="#" onClick={() => onLanguageSelected("es")}>
              <Image alt="" src="/spain-flag.png" />
            </a>
          </Box>
          <Box>
            <a href="#" onClick={() => onLanguageSelected("en")}>
              <Image alt="" src="/uk-flag.png" />
            </a>
          </Box>
        </Flex>
      </Grid>
    </Flex>
  );
}
