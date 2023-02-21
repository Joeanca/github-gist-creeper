import {
  Accordion, Heading, VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GithubUserAvatar from '../github-user/user';

import Gist from './gist';

const gistList = (gists) => gists.map(gistData => <Gist gistData={gistData.node} key={gistData?.node.id} />)

const GistContainer = ({ userData }) => {
  const [userGists, setUserGists] = useState([]);
  useEffect(() => {
    setUserGists(userData?.user?.gists?.edges || []);
  }, [userData?.id, userData?.user?.gists?.edges])
  return (
    <VStack>
      <GithubUserAvatar url={userData.user.avatarUrl} userName={userData.user.login} bio={userData.user.bio} />
      <Heading noOfLines={1}>
        {`${userData.user.login} Gists`}
      </Heading>
      <Accordion defaultIndex={[0]} allowToggle w='100%'>
        {gistList(userGists)}
      </Accordion>
    </VStack>
  )
}

export default GistContainer;
