import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";

export default function Index() {
  const [language, setLanguage] = useState();
  return (
    <>
      <Head>
        <title>Fork DAO</title>
      </Head>
      {language !== undefined ? (
        <Flex direction="column" width="100vw" height="100vh">
          <Header language={language} />
        </Flex>
      ) : (
        <Landing onLanguageSelected={setLanguage} />
      )}
    </>
  );
}
