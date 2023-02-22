import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Button,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React, { useContext, useState } from 'react';
import { TokenContext } from '../../context/token-context';

import inputStyle from './input-style';

const TokenBox = () => {
  const { token } = useContext(TokenContext);
  const [tokenValue, setTokenValue] = token;
  const [input, setInput] = useState(tokenValue);
  
  const handleInputChange = (e) => setInput(e.target.value);

  const updateToken = () => {
    setTokenValue(input);
  }

  return (
    <Accordion width='100%' allowToggle defaultIndex={tokenValue.length < 10 ? [0]: null}>
      <AccordionItem >
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
              {tokenValue.length < 10 ? 'Enter your token here to authenticate program' : 'Toggle to change your token'}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Flex style={inputStyle} w='100%'>
            <FormControl isRequired label='Please enter your github fine-grained-token'>
              <FormLabel>Github token</FormLabel>
              <Input type='text' onChange={handleInputChange} value={input} />
              <FormHelperText>
                Please enter a classic github token for authentication or
                <Link
                  href='https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
                  isExternal
                >
                  &nbsp;generate a classic token<ExternalLinkIcon mx='2px' />
                </Link>
              </FormHelperText>
              <Button onClick={updateToken}>Set token header</Button>
            </FormControl>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>

  )
};

export default TokenBox;

