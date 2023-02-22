import React, {PropsWithChildren} from "react";
import { VStack, Heading, StackDivider } from "@chakra-ui/react";
import landingStyle from "./style";

export default function LandingLayout(props: PropsWithChildren) {
  return (
    <VStack
      style={landingStyle.flexStyle}
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
