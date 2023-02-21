import {
  Accordion, Divider, Heading, VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GithubUserAvatar from '../github-user/user';

import Gist from './gist';

const gistList = (gists) => gists.map(
  (gistData, index) => <Gist gistData={gistData?.node || null} key={gistData?.node?.id || index} />
);

const GistContainer = ({ userData }) => {
  const [userGists, setUserGists] = useState([]);
  
  useEffect(() => {
    setUserGists(userData?.user?.gists?.edges || []);
  }, [userData?.id, userData?.user?.gists?.edges]);

  if (!userData?.user) return null
  return (
    <VStack>
      <GithubUserAvatar url={userData?.user?.avatarUrl} userName={userData.user.login} bio={userData.user.bio} />
      <Divider paddingTop={2} />  
      <Heading noOfLines={1} padding={4} size='lg'>
        {`${userData.user.login} Gists`}
      </Heading>
      <Accordion defaultIndex={[0]} allowToggle w='100%'>
        {gistList(userGists)}
      </Accordion>
    </VStack>
  )
}

export default GistContainer;
