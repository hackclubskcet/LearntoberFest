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
} from "@chakra-ui/react";

export default function EventsCard() {
  return (
    <div>
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Card
            hoverable
            title="Title of card"
            cover={[
              <img
                style={{ height: "256px", margin: 0 }}
                src="https://images.unsplash.com/photo-1557149289-0b6e90634e02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
              />,
            ]}
          >
            <Card.Meta
              title="Title of meta components"
              description="Description"
            />
          </Card>
        </Box>{" "}
        <Box>
          <Card
            hoverable
            title="Title of card"
            cover={[
              <img
                style={{ height: "256px", margin: 0 }}
                src="https://images.unsplash.com/photo-1557149289-0b6e90634e02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
              />,
            ]}
          >
            <Card.Meta
              title="Title of meta components"
              description="Description"
            />
          </Card>
        </Box>
      </SimpleGrid>
    </div>
  );
}
