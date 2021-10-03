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
  FormControl,
  Input,
  FormLabel,
  Select,
  FormHelperText,
} from "@chakra-ui/react";
import ReactTypingEffect from "react-typing-effect";
import { Badge } from "@chakra-ui/react";
const SubmitProject = () => {
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
                mt={{ base: "10" }}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Submit Project{" "}
                </chakra.span>
              </chakra.h1>
              <chakra.h1
                fontSize={{ base: "5xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              ></chakra.h1>
              <chakra.p
                mt={{ base: 10, sm: 5, md: 5 }}
                mx={{ sm: "auto", lg: 0 }}
                mb={6}
                fontSize={{ base: "md", md: "xl" }}
                color="gray.500"
                lineHeight="base"
              >
                Before submitting a project, make sure you have made a Pull
                Request on our GitHub repository. If you don't understand a Pull
                request is - click here.
                <br />
                <br />
              </chakra.p>
              <Stack
                direction={{ base: "column", sm: "column", md: "column" }}
                mb={{ base: 4, md: 8 }}
                mt={{ base: 10, md: 8 }}
                spacing={{ base: 7, md: 2 }}
                justifyContent="center"
              >
                <br />
                <br />
                <FormControl id="first-name" isRequired>
                  <FormLabel>Link to your pull request on GitHub</FormLabel>
                  <Input placeholder="This will be used for certificates" />
                </FormControl>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  size="lg"
                  variant="solid"
                >
                  Save and submit
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubmitProject;
