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
} from "@chakra-ui/react";
import ReactTypingEffect from "react-typing-effect";
import { Badge } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Box pos="relative" overflow="hidden">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
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
              <chakra.h1
                fontSize={{ base: "2xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Celebrating the power of{" "}
                </chakra.span>
              </chakra.h1>
              <chakra.h1
                fontSize={{ base: "5xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <ReactTypingEffect
                  text={[
                    "Open Source",
                    "Learning",
                    "Developers",
                    "Designers",
                    "Innovators",
                  ]}
                  cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                  displayTextRenderer={(text, i) => {
                    return (
                      <h1>
                        {text.split("").map((char, i) => {
                          const key = `${i}`;
                          return (
                            <span key={key} style={{ color: "#33d6a6" }}>
                              {char}
                            </span>
                          );
                        })}
                      </h1>
                    );
                  }}
                />
              </chakra.h1>
              <chakra.p
                mt={{ base: 10, sm: 5, md: 5 }}
                mx={{ sm: "auto", lg: 0 }}
                mb={6}
                fontSize={{ base: "md", md: "xl" }}
                color="gray.500"
                lineHeight="base"
              >
                Learn, ideate and build open source software.
                <br />
                October 5 - October 30, 2021.
              </chakra.p>
              <Badge color="#33d6a6" variant="subtle">
                Student only
              </Badge>{" "}
              <Badge color="#33d6a6" variant="subtle">
                Completely free
              </Badge>{" "}
              <Badge color="#33d6a6" variant="subtle">
                Inclusiv
              </Badge>
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
                >
                  Upcoming Workshops
                </Button>
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  variant="solid"
                >
                  Submit a project
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Image src="https://pipedream.com/s.v0/app_1dBhP3/logo/96"></Image>
      </Box>
    </Box>
  );
};

export default Hero;
