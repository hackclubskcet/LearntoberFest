import Head from "next/head";
import DashboardHero from "../components/DashboardHero";
import Navbar from "../components/Navbar";
import Router from "next/router";
import { supabase } from "../utils/supabaseClient";
import { Box, Image } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";

export default function Dashboard(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(props.loggedIn);
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    if (loggedIn === false) {
      Router.push("/");
    }

    async function fetchData() {
      const { data, error } = await supabase
        .from("profiles")
        .select("name, email, university, is_project_verified")
        .eq("id", supabase.auth.user().id)
        .limit(1);

      if (data.length === 0) {
        await Router.push("/profile");
      }

      if (error) {
        throw error;
      } else {
        setUser(data[0]);
        setIsLoading(false);
      }
    }

    if (loggedIn === true && user === null) {
      fetchData();
    }
  }, [loggedIn, user]);

  function getUserData(key) {
    if (user !== undefined && user !== null) {
      return user[key];
    }

    return "";
  }

  return (
    <div>
      <Head>
        <title>Learntober Fest</title>
        <meta name="description" content="An event promoting open source" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Box w="100%">
          <Image src="/LFload.gif" alt={"Loading...."} />
        </Box>
      ) : (
        <>
          <Navbar
            loggedIn={props.loggedIn}
            handleLogin={props.handleLogin}
            handleLogout={props.handleLogout}
          />
          <DashboardHero
            name={getUserData("name")}
            avatar={supabase.auth.user().user_metadata.avatar_url}
            university={getUserData("university")}
            is_project_verified={getUserData("is_project_verified")}
          />
        </>
      )}
    </div>
  );
}
