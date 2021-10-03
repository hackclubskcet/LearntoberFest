import React from "react";
import { Card } from "@supabase/ui";
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

export default function EventsCard() {
  return (
    <div>
        <SimpleGrid columns={2} spacing={10}>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
</SimpleGrid>
    </div>
  );
}
