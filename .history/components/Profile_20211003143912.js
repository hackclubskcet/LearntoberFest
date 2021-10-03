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
const ProfileComponent = () => {
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
              <chakra.h1
                fontSize={{ base: "2xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Profile{" "}
                </chakra.span>
              </chakra.h1>
              <chakra.h1
                fontSize={{ base: "5xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              ></chakra.h1>

              <Stack
                direction={{ base: "column", sm: "column", md: "column" }}
                mb={{ base: 4, md: 8 }}
                mt={{ base: 10, md: 8 }}
                spacing={{ base: 7, md: 2 }}
                justifyContent="center"
              >
                <FormControl id="first-name" isRequired>
                  <FormLabel>Full name</FormLabel>
                  <Input placeholder="First name" />
                </FormControl>
                <br />
                <br />
                <FormControl id="email" isRequired>
                  <FormLabel>University email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <br />
                <br />
                <FormControl id="country" isRequired>
                  <FormLabel>University</FormLabel>
                  <Select placeholder="Select your univeristy or select 'other' if you don't find it">
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                  </Select>
                </FormControl>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileComponent;
