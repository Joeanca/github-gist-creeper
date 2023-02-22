import React from "react";
import { VStack, Heading, StackDivider } from "@chakra-ui/react";
import landingStyle from "./style";

export default function LandingLayout(props) {
  return (
    <VStack
      style={landingStyle.flex}
      {...props}
      divider={<StackDivider borderColor='gray.200' />}
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
