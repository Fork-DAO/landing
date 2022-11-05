import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Image, Text, Link, Tooltip } from "@chakra-ui/react";
import { MULTISIG_TREASURY } from "../../wording/wording";

export default function Gnosis({ language }) {
  return (
    <Box py={4}>
      <Tooltip label="Gnosis Chain" placement="top">
        <Image rounded="xl" boxSize="100px" src="/gnosis.png" alt=""></Image>
      </Tooltip>

      <Box py={2} />
      <p>
        <Text align="center" fontSize="l" as="b">
          💵 {MULTISIG_TREASURY[language]}{" "}
          <Tooltip label="View on Gnosisscan">
            <Link href="https://gnosisscan.io/address/0x2393AFAdAC5476ab21133033793cF02a725BEdE2">
              <ExternalLinkIcon />
            </Link>
          </Tooltip>
        </Text>
      </p>
      <p>
        <Text align="center" fontSize="l" as="b">
          ⚖️ Governor{" "}
          <Tooltip label="View on blockscout">
            <Link href="https://blockscout.com/xdai/mainnet/address/0xf7dE5537eCD69a94695fcF4BCdBDeE6329b63322/transactions#address-tabs">
              <ExternalLinkIcon />
            </Link>
          </Tooltip>
        </Text>
      </p>
    </Box>
  );
}
