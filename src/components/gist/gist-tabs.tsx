import { LinkIcon } from '@chakra-ui/icons';
import { 
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  Button
} from '@chakra-ui/react'
import React from 'react';
import { Fork, ForkNode } from '../../interfaces/gist';
import GithubUserAvatar from '../github-user/user';

const FormattedGitTab = ({forkNode}:{forkNode: ForkNode}) => <Tab>{`${forkNode?.owner?.login || 'N/A'}`.toUpperCase()}</Tab>;

const FormattedGitTabPanel = ({gistDetails}:{gistDetails: ForkNode}) => (
  <TabPanel>
    <GithubUserAvatar
      url={gistDetails?.owner?.avatarUrl || 'N/A'}
      userName={gistDetails?.owner?.login || 'N/A'}
      bio={
        <>
          <Link href={gistDetails?.url || 'N/A'}>
            <Button flex='1' variant='ghost' leftIcon={<LinkIcon />} >
              Visit Gist
            </Button> 
          </Link>
        </>}
    />
  </TabPanel>
);

const GistTabs = ({ forkDetails }:{forkDetails: Fork['edges']}) => {
  return (
    <Card h='100%'>
      <CardHeader>
        <Heading size='md'>Last Forked By</Heading>
      </CardHeader>
      <CardBody paddingX={1}>
        <Tabs isFitted variant='enclosed'>
          <TabList>
            {forkDetails.map(
              fork => (<FormattedGitTab forkNode={fork.node} key={fork.node.id} />)
            )}
          </TabList>
          <TabPanels>gist
            {forkDetails.map(fork => <FormattedGitTabPanel gistDetails={fork.node} key={fork.node.id} />)}
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
}

export default GistTabs;
