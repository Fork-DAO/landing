import "@fontsource/raleway";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import fontTheme from "../styles/font-theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={fontTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
