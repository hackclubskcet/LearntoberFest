import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import {supabase} from "../utils/supabaseClient";

function MyApp({ Component, pageProps }) {
    function passLoggedIn() {
        return supabase.auth.user() !== null;
    }

  return (
    <ChakraProvider>
      <Component {...pageProps } loggedIn={passLoggedIn()} />
    </ChakraProvider>
  );
}

export default MyApp;
