import { Box } from "@chakra-ui/react";
import Q12023 from "./roadmap/Q12023";
import Q42022 from "./roadmap/Q42022";

export default function Roadmap({ language }) {
  return (
    <Box px={50} weight="100vw">
      <Q42022 language={language} />
      <Q12023 language={language} />
    </Box>
  );
}
