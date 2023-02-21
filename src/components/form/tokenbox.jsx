import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Button,
  Link
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/app-context';

import inputStyle from './input-style';

const TokenBox = () => {
  const [token, setToken] = useContext(AppContext);
  const [input, setInput] = useState(token)
  const handleInputChange = (e) => setInput(e.target.value);


  const updateToken = () => {
    setToken(input);
  }


  const isError = input === '';

  return (
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
  )
};

export default TokenBox;

