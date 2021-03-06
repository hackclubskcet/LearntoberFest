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
import Router from "next/router";
import { Box, Image } from "@chakra-ui/react";

export default function Home(props) {
  let [session, setSession] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  const [members, setMembers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const stats = props.stats;

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    async function fetchData() {
      const { data, error, count } = await supabase
        .from("profiles")
        .select("id", { count: "exact", head: true });

      if (error) {
        throw error;
      } else {
        setMembers(count);
        setIsLoading(false);
      }
    }

    if (!dataFetched) {
      fetchData().then(() => {
        setDataFetched(true);
      });
    }
  }, [dataFetched]);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      Router.push("/dashboard");
    }
  });

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
          <Hero handleLogin={props.handleLogin} />
          <About />
          <Stats
            pullRequests={stats.pullRequests}
            stars={stats.stars}
            commits={stats.commits}
            members={members}
          />
          <Collaborators />
          <Leaderboard />
          <FAQ />
        </>
      )}
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
