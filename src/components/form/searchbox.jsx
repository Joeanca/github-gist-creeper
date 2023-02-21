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
import {userGistsWithForks} from '../../api/queries/gists';

const endpoint = `https://api.github.com/graphql`;
const graphQLClient = new GraphQLClient(endpoint)

const SearchBox = () => {
  const [input, setInput] = useState('MohamedAlaa')
  const [token, _] = useContext(AppContext);

  graphQLClient.setHeaders({
    authorization: `Bearer ${token}`,
  });
  
  const handleInputChange = (e) => setInput(e.target.value);

  const { isInitialLoading, error, data, refetch, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      graphQLClient.request(
        userGistsWithForks,
        {username: input}
      ),
      enabled: false,
    }
  )

  if (!token) return null;

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
      {data && <ul>{
        data.user?.gists?.edges?.map(
            (e, i) => e?.node && 
              <Text key={`gist-${e?.node?.id}`} >{e.node.description}</Text>
        )}
      </ul>}
    </Flex>
  )
};

export default SearchBox;

