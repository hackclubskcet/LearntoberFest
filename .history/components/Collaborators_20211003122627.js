import React from "react";
import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Collaborators() {
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
        <Text
          fontSize={{ base: "md", md: "xl" }}
          textAlign={"center"}
          maxW={"3xl"}
          color="gray.500"
        >
          Coll
        </Text>
      </Stack>
    </div>
  );
}
