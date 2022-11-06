import { Box, Text, Link } from "@chakra-ui/react";
import { AVAILABLE_IN } from "../../wording/wording";

export default function TwitterSpaces({ language }) {
  return (
    <Box pt={2} pb={4}>
      <Text align="center" fontSize="xl" as="b" color="#FFC000">
        Twitter Spaces
      </Text>
      {/* <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/show/2f7JpdcrBqKXxCTsQAMn1q?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe> */}

      <Text align="left" fontSize="md" pt={10} pl={3}>
        {AVAILABLE_IN[language]}{" "}
        {
          <Link
            color="#ffcb2c"
            href="https://open.spotify.com/show/2f7JpdcrBqKXxCTsQAMn1q"
          >
            Spotify.
          </Link>
        }
      </Text>
    </Box>
  );
}
