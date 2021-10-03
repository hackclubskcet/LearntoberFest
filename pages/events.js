import Head from "next/head";
import EventsCard from "../components/EventsCard";
import EventsHero from "../components/EventsHero";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Home(props) {
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
      <EventsHero />
      <EventsCard />
    </div>
  );
}
