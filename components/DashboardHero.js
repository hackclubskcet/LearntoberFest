import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Icon,
  Image,
  HStack,
  Button,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import ReactTypingEffect from "react-typing-effect";
import { Badge } from "@chakra-ui/react";
const DashboardHero = (props) => {
  return (
    <Box pos="relative" overflow="hidden">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 10, lg: 10, xl: 10 }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            mt={{ base: 10 }}
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              textAlign="center"
              w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
              mx="auto"
            >
              {" "}
              <Avatar
                size="2xl"
                name={props.name}
                src={props.avatar}
              />{" "}
              <chakra.h1
                fontSize={{ base: "2xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Hello {props.name}!
                </chakra.span>
              </chakra.h1>
              <chakra.h1
                fontSize={{ base: "5xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              ></chakra.h1>
              <Badge color="#33d6a6" variant="subtle">
                {props.university}
              </Badge>{" "}
              <chakra.p
                mt={{ base: 10, sm: 5, md: 5 }}
                mx={{ sm: "auto", lg: 0 }}
                mb={6}
                fontSize={{ base: "md", md: "xl" }}
                color="gray.500"
                lineHeight="base"
              >
                We are excited to have you at Learntober Fest.
                <br />
                <br />
                Make sure you attend all the workshops, refer the resources and
                submit a project before the end of October, 2021. Successful
                submissions contribute more points to your univeristy in the
                leaderboard and unlocks your digital ceritifate and a chance to
                win prizes.
              </chakra.p>
              <Stack
                direction={{ base: "column", sm: "column", md: "row" }}
                mb={{ base: 4, md: 8 }}
                mt={{ base: 10, md: 8 }}
                spacing={{ base: 7, md: 2 }}
                justifyContent="center"
              >
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  variant="solid"
                  size="lg"
                >
                  Upcoming Workshops
                </Button>
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  size="lg"
                  variant="solid"
                >
                  Discord
                </Button>
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  size="lg"
                  variant="solid"
                >
                  How to submit
                </Button>
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  size="lg"
                  variant="solid"
                >
                  Submit a project
                </Button>
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  size="lg"
                  variant="solid"
                >
                  Project Gallery
                </Button>
              </Stack>
              <Stack
                direction={{ base: "column", sm: "column", md: "row" }}
                mb={{ base: 4, md: 8 }}
                mt={{ base: 10, md: 8 }}
                spacing={{ base: 7, md: 2 }}
                justifyContent="center"
              >
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  variant="solid"
                  size="lg"
                  isDisabled="true"
                >
                  Digital Certificate (Project not submitted/verified)
                </Button>
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  variant="solid"
                  size="lg"
                  isDisabled="true"
                >
                  Claim swags and rewards
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHero;
