import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function FAQ() {
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
          FAQ
        </Text>
      </Stack>
      <Accordion paddingX="30" mb="20">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color="#33D6A6" flex="1" textAlign="left">
                What is Learntober Fest?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Learntober Fest is a student-focussed event promoting open source
            technologies and tools. At Learntober, a number of workshops are
            hosted by student and industry experts. At Learntober fest,
            participants are asked to submit a project - an idea of something
            that they would like to build in the future. The submission of ideas
            are by creating a Pull Request in our repository. By the end, the
            participants are expected to have made their first Pull request in
            order to collect their digital certificate and swag.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color="#33D6A6" flex="1" textAlign="left">
                Who can attend?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Any student from anywhere in the world can attend Learntober Fest.
            However, some perks might only be available to students who are
            members of a Hack Club.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color="#33D6A6" flex="1" textAlign="left">
                What are the rewards?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            All teams who successfully make a PR are eligible to download their
            digital certificates. Based on the quality your submission, you will
            be eligible for swags which may include Stickers, limited edition
            tshirts, gift cards, coupons and a lot other swags.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color="#33D6A6" flex="1" textAlign="left">
                What are the rules?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            The rules are pretty simple - make sure you learn and enjoy at
            Learntober provided that you respect your fellow participants. Make
            sure you follow Hack Club's code of conduct.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color="#33D6A6" flex="1" textAlign="left">
                How much does it cost to attend?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            It's completely free to attend.
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color="#33D6A6" flex="1" textAlign="left">
                What are the tracks for submitting the project?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We do not have specific tracks for projects. Your project can be an
            idea/ proof of concept/ a functional code which can contribute to
            the Open source eco-system in some way or the other. Some examples
            of good projects - an open-source weather app, a COVID vaccine
            finder, a chat app for your community etc.,
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color="#33D6A6" flex="1" textAlign="left">
                How does the leaderboard work?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            The partnered hack clubs are displayed on the leaderboard. The
            universities with most project submissions tops the leaderboard and
            will be declared as the most active participants of Learntober Fest.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color="#33D6A6" flex="1" textAlign="left">
                I am interested to speak/ mentor/ sponsor at Learntober Fest.
                How can I?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We are happy to know your interest in contributing to our event.
            Kindly email us at learntober@hackclubskcet.tech
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
