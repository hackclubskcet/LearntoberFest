import Stories from "../../components/blog-components/stories";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function Index({ allPosts, loggedIn }) {
  return (
    <>
      <Head>
        <title>Blog - Hack Club SKCET</title>
        <meta
          property="og:title"
          title="Hack Club SKCET"
          content="Hack Club SKCET is the student coding community of Sri Krishna College of Engieering and Technology, Coimbatore."
          key="title"
        />
      </Head>
      <ChakraProvider>
        <Navbar loggedIn={loggedIn} />
        <div className="min-h-screen">
          <main>
            <Head>
              <title>Hackclub blog | Main</title>
            </Head>
            <div className="container mx-auto px-5">
              {/* <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                Welcome to <br /> SKCET blogs
              </h1>
            </section> */}
              <Stories posts={allPosts} />
            </div>
          </main>
        </div>
      </ChakraProvider>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
