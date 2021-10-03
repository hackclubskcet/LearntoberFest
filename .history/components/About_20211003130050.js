import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function About() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
        <motion.div
    style={{ scale }}
  >
    <motion.div
      style={{
        scaleY: scrollYProgress
      }}
    />
        <Text
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
