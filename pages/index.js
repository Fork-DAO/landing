import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { ABOUT_US, ROADMAP, PROJECTS, RESOURCES } from "../wording/wording";
import AboutUs from "../components/AboutUs";
import Roadmap from "../components/Roadmap";
import Projects from "../components/Projects";
import Resources from "../components/Resources";
import BodyContainer from "../components/BodyContainer";

export default function Index() {
  const [language, setLanguage] = useState();
  return (
    <>
      <Head>
        <title>Fork DAO</title>
      </Head>
      {language !== undefined ? (
        <Flex direction="column" width="100vw">
          <Header />
          <BodyContainer>
            <Tabs
              align="center"
              width="100vw"
              justifyContent="space-between"
              color="white"
              px={8}
              py={1}
            >
              <TabList>
                <Tab
                  fontSize="xl"
                  fontWeight="bold"
                  my={1}
                  _selected={{ color: "#37ab7c" }}
                >
                  {ABOUT_US[language]}
                </Tab>
                <Tab
                  fontSize="xl"
                  fontWeight="bold"
                  my={1}
                  _selected={{ color: "#37ab7c" }}
                >
                  {ROADMAP[language]}
                </Tab>
                <Tab
                  fontSize="xl"
                  fontWeight="bold"
                  my={1}
                  _selected={{ color: "#37ab7c" }}
                >
                  {PROJECTS[language]}
                </Tab>
                <Tab
                  fontSize="xl"
                  fontWeight="bold"
                  my={1}
                  _selected={{ color: "#37ab7c" }}
                >
                  {RESOURCES[language]}
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <AboutUs language={language} />
                </TabPanel>
                <TabPanel>
                  <Roadmap language={language} />
                </TabPanel>
                <TabPanel>
                  <Projects language={language} />
                </TabPanel>
                <TabPanel>
                  <Resources language={language} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </BodyContainer>
        </Flex>
      ) : (
        <Landing onLanguageSelected={setLanguage} />
      )}
    </>
  );
}
