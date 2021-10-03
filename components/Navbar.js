import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  CloseButton,
} from "@chakra-ui/react";
import { IconGitHub, IconLogOut } from "@supabase/ui";
import Link from "next/link";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

// const pathVariants = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0,
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     transition: {
//       duration: 4,
//       ease: "easeInOut",
//     },
//   },
// };

const pathVariants = {
  animate: {
    strokeDashoffset: 0,
    transition: {
      duration: 1,
    },
  },

  initial: {
    strokeDashoffset: 100,
  },
};

export default function Navbar(props) {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            ></chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              <motion.svg
                width="70"
                height="37"
                viewBox="0 0 70 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={pathVariants}
                animate="animate"
                initial="initial"
              >
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="28.4334"
                  y2="-1"
                  transform="matrix(-0.0105787 0.999944 -0.99994 -0.0109283 0.313995 1)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  animate="animate"
                  initial="initial"
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="4.4854"
                  y2="-1"
                  transform="matrix(-0.476626 0.879106 -0.86261 -0.50587 67.046 2.17017)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  animate="animate"
                  initial="initial"
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="31.274"
                  y2="-1"
                  transform="matrix(-0.0143495 0.999897 -0.99988 -0.0155209 4.94511 3.72937)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  animate="animate"
                  initial="initial"
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="20.6191"
                  y2="-1"
                  transform="matrix(0.999951 0.00995306 -0.0101242 0.999949 8.02789 30.4318)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="29.5394"
                  x2="2.21798"
                  y2="29.5394"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="5.81883"
                  y1="35"
                  x2="32.7004"
                  y2="35"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="5.64676"
                  y2="-1"
                  transform="matrix(0.603848 0.797099 -0.77349 0.633808 28.4094 30.22)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="4.37555"
                  y2="-1"
                  transform="matrix(0.861515 0.507732 -0.478449 0.878115 1.08585 2.44495)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="24.5158"
                  y2="-1"
                  transform="matrix(-0.999898 -0.0142793 0.0132016 -0.999913 68.4337 1.36438)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="26.8411"
                  y2="-1"
                  transform="matrix(-0.999913 -0.0132204 0.0122226 -0.999925 65.8193 6.18652)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="26.9954"
                  y2="-1"
                  transform="matrix(-0.999913 -0.0132204 0.0122226 -0.999925 65.8193 6.18652)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="29.7714"
                  y2="-1"
                  transform="matrix(-0.00162038 0.999999 -0.999998 -0.00175269 39.8329 1.16064)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="11.8439"
                  y2="-1"
                  transform="matrix(0.000102266 1 -1 0.000110616 34.893 5.81653)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="14.6906"
                  y2="-1"
                  transform="matrix(-0.00265625 0.999997 -0.999996 -0.00287314 34.893 20.2659)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="5.58657"
                  y2="-1"
                  transform="matrix(-0.772135 0.635459 -0.605519 -0.795831 40.3979 30.6461)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="25.0809"
                  y2="-1"
                  transform="matrix(-0.999959 -0.00903143 0.00834971 -0.999965 69 14.2623)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="27.4079"
                  y2="-1"
                  transform="matrix(-0.999875 -0.015789 0.0145973 -0.999893 66.3855 19.0846)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
                <motion.line
                  x1="1"
                  y1="-1"
                  x2="4.4854"
                  y2="-1"
                  transform="matrix(-0.476626 0.879106 -0.86261 -0.50587 67.6123 15.0681)"
                  stroke="#33D6A6"
                  stroke-width="2"
                  stroke-linecap="square"
                  variants={pathVariants}
                  pathLength="100"
                  strokeDasharray="100"
                />
              </motion.svg>
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">About Learntober</Button>
              <Button variant="ghost">Collaborators</Button>
              <Button variant="ghost">Workshops</Button>
              <Button variant="ghost">Leaderboard</Button>
            </HStack>

            {props.loggedIn ? (
              <Link href="/logout">
                <Button
                  leftIcon={<IconLogOut />}
                  color="red"
                  variant="solid"
                  onClick={props.handleLogin}
                >
                  Logout
                </Button>
              </Link>
            ) : (
              <Button
                leftIcon={<IconGitHub />}
                color="#33d6a6"
                variant="solid"
                onClick={props.handleLogout}
              >
                Login with GitHub
              </Button>
            )}
            <Box display={{ base: "inline-flex", md: "none" }}>
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
