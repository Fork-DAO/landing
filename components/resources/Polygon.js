import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Image, Text, Link, Tooltip } from "@chakra-ui/react";

export default function Polygon({ language }) {
  return (
    <Box py={2}>
      <Image rounded="xl" boxSize="100px" src="/polygon.png" alt=""></Image>
      <Box py={2} />
      <p>
        <Text align="center" fontSize="l" as="b">
          💵 Tesorería - Multisig{" "}
          <Tooltip label="View on Polyscan">
            <Link href="https://polygonscan.com/address/0x45faB48518dFb3027f8eD6Ee4566F7180D290DeC">
              <ExternalLinkIcon />
            </Link>
          </Tooltip>
        </Text>
      </p>
      <p>
        <Text align="center" fontSize="l" as="b">
          📱 Multisig Community Managers{" "}
          <Tooltip label="View on Polyscan">
            <Link href="https://polygonscan.com/address/0x45faB48518dFb3027f8eD6Ee4566F7180D290DeC">
              <ExternalLinkIcon />
            </Link>
          </Tooltip>
        </Text>
      </p>
    </Box>
  );
}
