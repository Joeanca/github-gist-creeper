import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex, 
  Button,
  Text
} from '@chakra-ui/react'
import React, {useState, useContext} from 'react';
import {useQuery} from '@tanstack/react-query';
import { GraphQLClient, gql } from 'graphql-request'

import inputStyle from './input-style';
import { AppContext } from '../../context/app-context';
import {userGistsWithForks} from '../../api/queries/get-user-gists.js';
import {endpoint} from '../../constants/constants';

const graphQLClient = new GraphQLClient(endpoint)

const SearchBox = () => {
  const [input, setInput] = useState('MohamedAlaa')
  const {token, userData} = useContext(AppContext);
  const [tokenValue] = token;
  const [, setUserDataValue] = userData;

  graphQLClient.setHeaders({
    authorization: `Bearer ${tokenValue}`,
  });
  
  const handleInputChange = (e) => setInput(e.target.value);

  const { isInitialLoading, error, refetch, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      graphQLClient.request(
        userGistsWithForks,
        {username: input}
      ).then(data => {
        setUserDataValue(data);
        return data;
      }),
      enabled: false,
    }
  )

  if (!token) return null;

  if (isInitialLoading || isFetching) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

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

