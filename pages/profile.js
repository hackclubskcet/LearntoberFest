import Head from "next/head";
import Navbar from "../components/Navbar";
import ProfileComponent from "../components/Profile";
import { useEffect, useState } from "react";
import Router from "next/router";
import { supabase } from "../utils/supabaseClient";

export default function Profile(props) {
  const [loggedIn, setLoggedIn] = useState(props.loggedIn);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (loggedIn === false) {
      Router.push("/");
    }

    async function fetchData() {
      const { data, error } = await supabase
        .from("profiles")
        .select("name, email, university")
        .eq("id", supabase.auth.user().id)
        .limit(1);

      if (error) {
        throw error;
      } else {
        setUser(data[0]);
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
        name={getUserData("name")}
        avatar_url={getUserData("avatar_url")}
        loggedIn={loggedIn}
      />
      <ProfileComponent
        name={getUserData("name")}
        email={getUserData("email")}
        university={getUserData("university")}
        loggedIn={loggedIn}
      />
    </div>
  );
}
