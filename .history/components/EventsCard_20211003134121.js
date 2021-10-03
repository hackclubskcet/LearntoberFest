import React from "react";
import { Card } from "@supabase/ui";
import {
  chakra,
  Box,
  useColorModeValue,
  Icon,
  Image,
  SimpleGrid,
  HStack,
  Button,
  Stack,
  Text,
  Heading,
  Avatar,
  Center,
  Flex,
  Link,
  Grid,
  GridItem,
  Spacer,
} from "@chakra-ui/react";

export default function EventsCard() {
  function Cards(props) {
    return (
      <Center>
        <Box mx="10" rounded="lg" shadow="md" bg="gray.700" maxW="2xl">
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Article"
          />

          <Box p={6}>
            <Box>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color={useColorModeValue("brand.600", "brand.400")}
              >
                {props.time}
              </chakra.span>
              <Link
                display="block"
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{ color: "gray.600", textDecor: "underline" }}
              >
                Title
              </Link>
              <chakra.p
                mt={2}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel. Natoque sem et
                aliquam mauris egestas quam volutpat viverra. In pretium nec
                senectus erat. Et malesuada lobortis.
              </chakra.p>
            </Box>

            <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Image
                    h={10}
                    fit="cover"
                    rounded="full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <Link
                    mx={2}
                    fontWeight="bold"
                    color={useColorModeValue("gray.700", "gray.200")}
                  >
                    Jone Doe
                  </Link>
                </Flex>
                <Spacer />
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  variant="solid"
                >
                  Attend Event
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Center>
    );
  }

  return (
    <div>
      <Grid mb="20" templateColumns="repeat(2, 1)" gap={10}>
        <Cards time="7 PM - October 20, 2021" />
        <Cards />
        <Cards />
        <Cards />
      </Grid>
    </div>
  );
}
