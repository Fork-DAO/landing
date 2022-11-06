import {
  Text,
  Box,
  Grid,
  GridItem,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import {
  EVERY_PROTOCOL_NEEDS,
  FORK_ESTABLISHING,
  FORK_INTERACTION,
  FORK_MAIN_VALUES,
  SOFTWARE_FORK,
  THATS_OUR_FORK,
  WHY_FORK,
} from "../../wording/wording";

export default function AboutUs({ language }) {
  return (
    <Box py={10} px={25} height="100vh" weight="100vw">
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        <GridItem w="100%" h="100%">
          <p>
            <Text fontSize="xl" color="white" align="left">
              {FORK_ESTABLISHING[language]}
            </Text>
          </p>
          <p>
            <Text fontSize="xl" color="white" align="left">
              {FORK_INTERACTION[language]}
            </Text>
          </p>

          <p>
            <Text fontSize="2xl" color="#FFC000" pt={5} align="left">
              {FORK_MAIN_VALUES[language]}
            </Text>
          </p>
        </GridItem>
        <GridItem w="100%" h="100%" alignItems="center" display="flex">
          <Flex gap={1}>
            <Image src="/logopohfork.png" alt="" w="15%" h="15%" />
            <Spacer />
            <Image src="/logoklerosfork.png" alt="" w="15%" h="15%" />
            <Spacer />
            <Image src="/logoubifork.png" alt="" w="15%" h="15%" />
            <Spacer />
            <Image src="/logolensfork.png" alt="" w="15%" h="15%" />
            <Spacer />
            <Image src="/logoprodefork.png" alt="" w="15%" h="15%" />
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100%" alignItems="center" display="flex">
          {/* <Image src="/bannerfork.png" alt="" /> */}
          *Imagen del green day*
        </GridItem>
        <GridItem w="100%" h="100%">
          <p>
            <Text fontSize="2xl" color="#FFC000" py={2} as="b">
              {WHY_FORK[language]}
            </Text>
          </p>

          <p>
            <Text fontSize="xl" color="white" py={5} align="left">
              {SOFTWARE_FORK[language]}
            </Text>
          </p>

          <p>
            <Text fontSize="xl" color="white" py={2} align="left">
              {EVERY_PROTOCOL_NEEDS[language]}
            </Text>
          </p>
        </GridItem>
      </Grid>

      <Box pt={7}>
        <p>
          <Text fontSize="3xl" color="#FFC000" as="b">
            {THATS_OUR_FORK[language]}
          </Text>
        </p>
      </Box>
    </Box>
  );
}
