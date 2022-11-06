import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Image, Text, Link, Tooltip } from "@chakra-ui/react";
import {
  MULTISIG_TREASURY,
  POLY_MULTISIG_RESOURCE,
} from "../../wording/wording";

export default function Mainnet({ language }) {
  return (
    <Box py={4}>
      <Tooltip label="Ethereum Mainnet" placement="top">
        <Image
          bg="white"
          rounded="xl"
          boxSize="100px"
          src="/mainnet.webp"
          alt=""
        ></Image>
      </Tooltip>
      <Box py={2} />
      <p>
        <Text align="center" fontSize="l" as="b">
          💵 {MULTISIG_TREASURY[language]}{" "}
          <Tooltip label="View on Etherscan">
            <Link href="https://etherscan.io/address/0x7c99b57283897f3D7dEe76557bD803D473e612c5">
              <ExternalLinkIcon />
            </Link>
          </Tooltip>
        </Text>
      </p>
    </Box>
  );
}
