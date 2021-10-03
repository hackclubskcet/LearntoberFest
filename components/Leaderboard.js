import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function LeaderboardComponent() {
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
        <Bar
          data={data}
          width={400}
          height={200}
          options={{
            indexAxis: "y",
          }}
        />
      </Stack>
    </div>
  );
}
