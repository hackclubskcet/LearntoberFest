import Head from "next/head";
import Navbar from "../components/Navbar";
import SubmitProject from "../components/SubmitProject";
import Router from "next/router";
import { supabase } from "../utils/supabaseClient";
import { useLayoutEffect, useState } from "react";

export default function Submit(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(props.loggedIn);
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    if (loggedIn === false) {
      Router.push("/login");
    }

    async function fetchData() {
      const { data, error } = await supabase
        .from("profiles")
        .select("name, email, university, project_url, is_project_verified")
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
      <Navbar
        loggedIn={props.loggedIn}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
      <SubmitProject
        project_url={getUserData("project_url")}
        is_verified={getUserData("is_project_verified")}
      />
    </div>
  );
}
