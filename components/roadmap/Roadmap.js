import { Box } from "@chakra-ui/react";
import Q12023 from "./Q12023";
import Q42022 from "./Q42022";

export default function Roadmap({ language }) {
  return (
    <Box px={50} weight="100vw">
      <Q42022 isMobile={false} language={language} />
      <Q12023 isMobile={false} language={language} />
    </Box>
  );
}
