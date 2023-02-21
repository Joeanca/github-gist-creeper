import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex, 
  Button
} from '@chakra-ui/react'
import React, {useState, useContext} from 'react';
import {useQuery} from '@tanstack/react-query';

import inputStyle from './input-style';
import { githubUserGistsURL } from '../../constants/api-constants';
import { AppContext } from '../../context/app-context';

const SearchBox = () => {
  const [input, setInput] = useState('')
  const [token, _] = useContext(AppContext);
  
  const handleInputChange = (e) => setInput(e.target.value);

  const { isInitialLoading, error, data, refetch, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://api.github.com/users/${input}/gists`,
          { headers: {
            Authorization: `token ${token}`,
            'User-Agent': 'gits-creeper',
            accept: 'application/vnd.github+json',
          }}
        ).then(res =>
        res.json()
      ),
      enabled: false,
    }
  )
  if (isInitialLoading || isFetching) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  
  const isError = input === '';

  return (
    <Flex style={inputStyle}>
      <FormControl isRequired label='Please enter the github username whose GISTS you would like to see'>
        <FormLabel>Github username</FormLabel>
        <Input type='text' value={input} onChange={handleInputChange}/>
          <FormHelperText>
            Please enter the github username whose GISTS you would like to see
          </FormHelperText>
        <Button onClick={refetch}>Search</Button>
      </FormControl>
    </Flex>
  )
};

export default SearchBox;

