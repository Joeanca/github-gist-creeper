import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex, 
  Button
} from '@chakra-ui/react'
import React, {useContext, useState} from 'react';
import { AppContext } from '../../context/app-context';

import inputStyle from './input-style';

const TokenBox = () => {
  const [token, setToken] = useContext(AppContext);
  const [input, setInput] = useState(token)
  const handleInputChange = (e) => setInput(e.target.value);

  
  const updateToken = () => {
    console.log(input);
    setToken(input);
  }


  const isError = input === '';

  return (
    <Flex style={inputStyle}>
      <FormControl isRequired label='Please enter your github fine-grained-token'>
        <FormLabel>Github token</FormLabel>
        <Input type='text'  onChange={handleInputChange} value={input} />
          <FormHelperText>
            Please enter the fine grained token to attach to the requests
          </FormHelperText>
        <Button onClick={updateToken}>Set token header</Button>
      </FormControl>
    </Flex>
  )
};

export default TokenBox;

