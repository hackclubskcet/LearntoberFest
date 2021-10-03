import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

export default function Leaderboard() {
  return (
    <div>
      {" "}
      <Stack
        bg={useColorModeValue("gray.50", "gray.800")}
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={"center"}
        direction={"column"}
      >
        <Text textAlign={"center"} fontSize={"4xl"} py={10} fontWeight={"bold"}>
          Leaderboard
        </Text>
      </Stack>
    </div>
  );
}