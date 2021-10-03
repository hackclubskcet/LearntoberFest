import Head from "next/head";
import About from "../components/About";
import Collaborators from "../components/Collaborators";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Leaderboard from "../components/Leaderboard";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import { supabase } from "../utils/supabaseClient";
import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql, HttpLink } from "@apollo/client";

export default function Home({ stats }) {
  let [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => setSession(session));
  }, []);

  async function handleLogin() {
    let { error } = await supabase.auth.signIn({ provider: "github" });
    if (error) console.log("Error: ", error.message);
  }

  return (
    <div>
      <Head>
        <title>Learntober Fest</title>
        <meta name="description" content="An event promoting open source" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar handleLogin={handleLogin} />
      <Hero handleLogin={handleLogin} />
      <About />
      <Stats
        pullRequests={stats.pullRequests}
        stars={stats.stars}
        commits={stats.commits}
      />
      <Collaborators />
      <Leaderboard />
      <FAQ />
    </div>
  );
}

export async function getServerSideProps() {
  const GITHUB_BASE_URL = "https://api.github.com/graphql";

  const httpLink = new HttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
      authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  const response = await client.query({
    query: gql`
      query {
        repository(name: "LearntoberFest", owner: "hackclubskcet") {
          stargazerCount

          pullRequests {
            totalCount
          }
          object(expression: "master") {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
      }
    `,
  });
  const data = {
    stars: response.data.repository.stargazerCount,
    pullRequests: response.data.repository.pullRequests.totalCount,
    commits: response.data.repository.object.history.totalCount,
  };
  return {
    props: {
      stats: data,
    },
  };
}
