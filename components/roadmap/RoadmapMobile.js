import { Box } from "@chakra-ui/react";
import Q12023 from "./Q12023";
import Q42022 from "./Q42022";

export default function RoadmapMobile({ language }) {
  return (
    <Box>
      <Q42022 isMobile={true} language={language} />
      <Q12023 isMobile={true} language={language} />
    </Box>
  );
}
