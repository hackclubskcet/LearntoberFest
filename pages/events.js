import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Collaborators from "../components/Collaborators";
import EventsCard from "../components/EventsCard";
import EventsHero from "../components/EventsHero";
import Hero from "../components/Hero";
import Leaderboard from "../components/Leaderboard";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learntober Fest</title>
        <meta name="description" content="An event promoting open source" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <EventsHero />
      <EventsCard />
    </div>
  );
}
