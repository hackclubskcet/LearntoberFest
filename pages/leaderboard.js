import Head from "next/head";
import LeaderboardComponent from "../components/Leaderboard";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import styles from "../styles/Home.module.css";

export default function Leaderboard() {
  return (
    <div>
      <Head>
        <title>Learntober Fest</title>
        <meta name="description" content="An event promoting open source" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LeaderboardComponent />
    </div>
  );
}
