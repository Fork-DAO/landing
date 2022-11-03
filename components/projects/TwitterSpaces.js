import { Box, Text, Link } from "@chakra-ui/react";

export default function Projects({ language }) {
  return (
    <Box>
      <Text align="center" fontSize="xl" as="b">
        Twitter Spaces
      </Text>

      <Text align="left" fontSize="md" pl={3}>
        - Invitados:
      </Text>
      <Text align="left" fontSize="md" pl={8}>
        <Link color="teal.300" href="https://twitter.com/forereth">
          forer.eth
        </Link>{" "}
        from Kleros
      </Text>
      <Text align="left" fontSize="md" pl={8}>
        <Link color="teal.300" href="https://twitter.com/JuanuMusic">
          juanu.eth
        </Link>{" "}
        UBIv2 buidler
      </Text>
      <Text align="left" fontSize="md" pl={8}>
        <Link color="teal.300" href="https://twitter.com/donosonaumczuk">
          donosonaumczuk.eth
        </Link>{" "}
        from Lens
      </Text>
      <Text align="left" fontSize="md" pl={3}>
        Disponible en{" "}
        {
          <Link
            color="teal.300"
            href="https://open.spotify.com/show/2f7JpdcrBqKXxCTsQAMn1q"
          >
            Spotify
          </Link>
        }
      </Text>
    </Box>
  );
}
