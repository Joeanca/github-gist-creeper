import {
  Accordion, Divider, Heading, VStack,
} from '@chakra-ui/react';
import React, { memo } from 'react';
import GithubUserAvatar from '../github-user/user';

import Gist from './gist';
import { useUserData } from '../../context/user-context';
import { GistNode } from '../../interfaces/gist';

interface FormattedGistProps {
  gistData: GistNode,
}
const FormattedGist = memo(({gistData}:FormattedGistProps) =><Gist gistData={gistData?.node || null}  />);

const GistContainer = () => {
  const {userData} = useUserData();
  const gists: GistNode[] = userData?.user?.gists?.edges || [];
  const sortedGists = gists.sort(
    (a,b) =>(
      (b.node?.forks?.totalCount || 0) - (a.node?.forks?.totalCount || 0) ||
      new Date(b.node?.createdAt).valueOf() - new Date(a.node?.createdAt).valueOf())
    );

  if (!userData?.user) return null
  return (
    <VStack w='100%'>
      <GithubUserAvatar 
        url={userData?.user?.avatarUrl || ''}
        userName={userData?.user?.login || 'N/A'}
        bio={userData?.user?.bio || null}
      />
      <Divider paddingTop={2} />  
      <Heading noOfLines={1} padding={4} size='lg'>
        {`${userData?.user?.login || 'N/A' } Gists`}
      </Heading>
      <Accordion defaultIndex={[0]} allowToggle w='100%'>
        {sortedGists.map(
          (gistData: GistNode, index) => (
            <FormattedGist key={gistData?.node?.id || index} gistData={gistData} />))
        }
      </Accordion>
    </VStack>
  )
}

export default GistContainer;
