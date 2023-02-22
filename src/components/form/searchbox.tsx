import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  FormErrorMessage,
  Spinner,
  Grid,
  GridItem,
  Center, 
} from '@chakra-ui/react'
import React, {useState, useContext, useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request'

import inputStyle from './input-style';
import { TokenContext } from '../../context/token-context';
import { useUserData } from '../../context/user-context';
import {userGistsWithForks} from '../../api/queries/get-user-gists.js';
import {endpoint, githubMinUserNameLength} from '../../constants/constants';
import { debounce } from '../../utilities/input-utilities';

const graphQLClient = new GraphQLClient(endpoint)

const SearchBox = () => {
  const [input, setInput] = useState('MohamedAlaa')
  const {token} = useContext(TokenContext);
  const  {setUserData} = useUserData();

  graphQLClient.setHeaders({
    authorization: `Bearer ${token}`,
  });

  const handleInputChange = debounce((e: any) => setInput(e.target.value), 500);

  useEffect(() => {
    setUserData(null);
  },[input, setUserData])

  const { isInitialLoading, error, isFetching } = useQuery({
    queryKey: [input],
    queryFn: () =>
      graphQLClient.request(
        userGistsWithForks,
        {username: input}
      ).then(data => {
        setUserData(data);
        return data;
      }),
      enabled: input.length >= githubMinUserNameLength,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  )

  const errorMessage:string = (error as any)?.response?.errors[0]?.message

  if (!token || token.length < githubMinUserNameLength) return null;

  return (
    <Grid style={(inputStyle as any)} >
      <GridItem w='100%'>
        <FormControl  isRequired label='Please enter the github username whose GISTS you would like to see' isInvalid={!!error}>
          <FormLabel>Github username</FormLabel>
          <Input type='text' defaultValue={input} onChange={handleInputChange} />
            <FormHelperText>
              Please enter the github username whose GISTS you would like to see
            </FormHelperText>
            <FormErrorMessage>
              {((error as any) && errorMessage ) || 'an error occurred'}
            </FormErrorMessage>
        </FormControl>
      </GridItem>
      <GridItem>
        <Center pt={4}>
          {(isInitialLoading || isFetching) && <Spinner size='xl'  />}
        </Center>
      </GridItem >
    </Grid>
  )
};

export default SearchBox;

