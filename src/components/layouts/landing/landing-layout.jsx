import React from "react";
import { VStack, Heading } from "@chakra-ui/react";
import flexLayout from "./style";

export default function LandingLayout(props) {
  return (
    <VStack
      style={flexLayout}
      {...props}
    >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          User Gists Search
        </Heading>      
        {props.children}
    </VStack>
  );
}
