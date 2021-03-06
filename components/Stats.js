import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Stat
        px={{ base: 4, md: 8 }}
        py={"5"}
        shadow={"xl"}
        border={"1px solid"}
        borderColor={useColorModeValue("gray.800", "gray.500")}
        rounded={"lg"}
      >
        <StatLabel fontWeight={"medium"} isTruncated>
          {props.title}
        </StatLabel>
        <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
          {props.stat}
        </StatNumber>
      </Stat>
    </motion.button>
  );
}

export default function BasicStatistics(props) {
  const { pullRequests, stars, commits, members } = props;
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Live Stats
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"Pull requests"} stat={pullRequests} />
        <StatsCard title={"Commits"} stat={commits} />
        <StatsCard title={"Participants registered"} stat={members} />
      </SimpleGrid>
    </Box>
  );
}
