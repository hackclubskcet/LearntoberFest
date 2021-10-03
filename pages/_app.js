import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import {supabase} from "../utils/supabaseClient";
import Navbar from "../components/Navbar";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
    function isLoggedIn() {
        return supabase.auth.user() !== null;
    }

    async function handleLogin() {
        let { error } = await supabase.auth.signIn({ provider: "github" });
        if (error) console.log("Error: ", error.message);
    }

    async function handleLogout() {
        let { error } = await supabase.auth.signOut();
        if (error) console.log("Error: ", error.message);

        await Router.push('/');
    }

  return (
    <ChakraProvider>
      <Component {...pageProps } loggedIn={isLoggedIn()} handleLogin={handleLogin} handleLogout={handleLogout}/>
    </ChakraProvider>
  );
}

export default MyApp;
