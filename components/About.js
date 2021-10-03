import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const pathVariants = {
  animate: {
    strokeDashoffset: 0,
    transition: {
      duration: 3,
    },
  },

  initial: {
    strokeDashoffset: 100,
  },
};

export default function About() {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <motion.svg
        width="332"
        height="161"
        viewBox="0 0 332 161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={pathVariants}
        animate="animate"
        initial="initial"
        pathLength="100"
        strokeDasharray="100"
      >
        <motion.line
          x1="4"
          y1="-4"
          x2="130.995"
          y2="-4"
          transform="matrix(-0.0109745 0.99994 -0.999945 -0.0105342 1.4815 1)"
          stroke="#33D6A6"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="141.89"
          y2="-4"
          transform="matrix(-0.0152324 0.999884 -0.999893 -0.0146213 23.7041 13.3375)"
          stroke="#33D6A6"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="101.189"
          y2="-4"
          transform="matrix(0.999976 0.00689935 -0.00718776 0.999974 37.0376 135.262)"
          stroke="#33D6A6"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="8.07367"
          y1="132"
          x2="12.0737"
          y2="132"
          stroke="#33D6A6"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="26.0737"
          y1="155"
          x2="157.074"
          y2="155"
          stroke="#33D6A6"
          stroke-width="20"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="26.7328"
          y2="-4"
          transform="matrix(0.626678 0.779278 -0.791598 0.611042 136.298 133.084)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="21.4177"
          y2="-4"
          transform="matrix(0.874296 0.485393 -0.500675 0.865635 5.18527 7.53162)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="118.438"
          y2="-4"
          transform="matrix(-0.999909 -0.0134516 0.0140139 -0.999902 328.356 2.64697)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="129.596"
          y2="-4"
          transform="matrix(-0.999922 -0.0124541 0.0129746 -0.999916 315.811 24.4452)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="130.337"
          y2="-4"
          transform="matrix(-0.999922 -0.0124541 0.0129746 -0.999916 315.811 24.4452)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="135.097"
          y2="-4"
          transform="matrix(-0.0017201 0.999999 -0.999999 -0.00165108 191.114 1.72571)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="54.059"
          y2="-4"
          transform="matrix(0.000108559 1 -1 0.000104203 167.41 22.7721)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="66.9271"
          y2="-4"
          transform="matrix(-0.00281972 0.999996 -0.999996 -0.00270658 167.41 88.0886)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="26.8791"
          y2="-4"
          transform="matrix(-0.790309 0.612709 -0.628335 -0.777943 193.825 135.011)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="21.1507"
          y2="-4"
          transform="matrix(-0.498821 0.866705 -0.875311 -0.48356 321.698 6.28955)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="121.15"
          y2="-4"
          transform="matrix(-0.999964 -0.00850789 0.00886352 -0.999961 331.074 60.9504)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="132.316"
          y2="-4"
          transform="matrix(-0.999889 -0.0148738 0.0154955 -0.99988 318.528 82.7485)"
          stroke="#33D6A6"
          stroke-width="8"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
        <motion.line
          x1="4"
          y1="-4"
          x2="21.1507"
          y2="-4"
          transform="matrix(-0.498821 0.866705 -0.875311 -0.48356 324.415 64.5929)"
          stroke="#33D6A6"
          stroke-width="20"
          stroke-linecap="square"
          variants={pathVariants}
          animate="animate"
          initial="initial"
          pathLength="100"
          strokeDasharray="100"
        />
      </motion.svg>

      <motion.div animate={{ scale: 1.1 }} transition={{ duration: 2.5 }}>
        <Text
          mt="10"
          fontSize={{ base: "md", md: "xl" }}
          textAlign={"center"}
          maxW={"3xl"}
          color="gray.500"
        >
          Learntober Fest is a event promoting <b>open source</b>. At
          Learntober, we have a number of <b>workshops and talks</b> hosted by
          students and professionals. At the end of Learntober Fest, we expect
          you to have your first commit and PR merged in GitHub.
        </Text>
      </motion.div>
    </Stack>
  );
}
