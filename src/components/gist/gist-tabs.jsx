import { LinkIcon } from '@chakra-ui/icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Card, CardBody, CardHeader, Heading, Link, Button, Text } from '@chakra-ui/react'
import GithubUserAvatar from '../github-user/user';

const tabList = (forkDetails) => forkDetails.map(fork => <Tab key={fork.node.id}>{`${fork.node.owner.login}`.toUpperCase()}</Tab>);
const tabPanelList = (forkDetails) => forkDetails.map(fork => (
  <TabPanel key={fork.node.id}>
    <GithubUserAvatar 
      url={fork.node.owner.avatarUrl}
      userName={fork.node.owner.login}
      bio={
        <>
          <Link href={fork.node.url}>
            <Button flex='1' variant='ghost' leftIcon={<LinkIcon />} >
              Visit Gist
            </Button> 
          </Link>
        </>}
    />
  </TabPanel>
));


const GistTabs = ({ forkDetails }) => {
  return (
    <Card h='100%'>
      <CardHeader>
        <Heading size='md'>Last Forked By</Heading>
      </CardHeader>
      <CardBody paddingX={1}>
        <Tabs isFitted variant='enclosed'>
          <TabList>
            {tabList(forkDetails)}
          </TabList>
          <TabPanels>gist
            {tabPanelList(forkDetails)}
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
}

export default GistTabs;
