import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { ABOUT_US, ROADMAP, PROJECTS, RESOURCES } from "../wording/wording";
import AboutUs from "../components/about-us/AboutUs";
import Roadmap from "../components/roadmap/Roadmap";
import Projects from "../components/projects/Projects";
import Resources from "../components/resources/Resources";
import BodyContainer from "../components/BodyContainer";
import ResourcesMobile from "../components/resources/ResourcesMobile";
import ProjectsMobile from "../components/projects/ProjectsMobile";
import RoadmapMobile from "../components/roadmap/RoadmapMobile";
import AboutUsMobile from "../components/about-us/AboutUsMobile";

export default function Index() {
  const [language, setLanguage] = useState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 769);
  }, []);

  return (
    <>
      <Head>
        <title>Fork DAO</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {language !== undefined ? (
        <Flex direction="column" w="100vw">
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
                  _selected={{ color: "#FFC000" }}
                >
                  {ABOUT_US[language]}
                </Tab>
                <Tab
                  fontSize="xl"
                  fontWeight="bold"
                  my={1}
                  _selected={{ color: "#FFC000" }}
                >
                  {ROADMAP[language]}
                </Tab>
                <Tab
                  fontSize="xl"
                  fontWeight="bold"
                  my={1}
                  _selected={{ color: "#FFC000" }}
                >
                  {PROJECTS[language]}
                </Tab>
                <Tab
                  fontSize="xl"
                  fontWeight="bold"
                  my={1}
                  _selected={{ color: "#FFC000" }}
                >
                  {RESOURCES[language]}
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {isMobile ? (
                    <AboutUsMobile language={language} />
                  ) : (
                    <AboutUs language={language} />
                  )}
                </TabPanel>
                <TabPanel>
                  {isMobile ? (
                    <RoadmapMobile language={language} />
                  ) : (
                    <Roadmap language={language} />
                  )}
                </TabPanel>
                <TabPanel>
                  {isMobile ? (
                    <ProjectsMobile language={language} />
                  ) : (
                    <Projects language={language} />
                  )}
                </TabPanel>
                <TabPanel>
                  {isMobile ? (
                    <ResourcesMobile language={language} />
                  ) : (
                    <Resources language={language} />
                  )}
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
