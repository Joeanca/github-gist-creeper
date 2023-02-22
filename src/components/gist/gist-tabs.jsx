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
import GithubUserAvatar from '../github-user/user';

const FormattedGitTab = ({gistDetails}) => <Tab>{`${gistDetails?.owner?.login || 'N/A'}`.toUpperCase()}</Tab>;

const FormattedGitTabPanel = ({gistDetails}) => (
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

const GistTabs = ({ forkDetails }) => {
  return (
    <Card h='100%'>
      <CardHeader>
        <Heading size='md'>Last Forked By</Heading>
      </CardHeader>
      <CardBody paddingX={1}>
        <Tabs isFitted variant='enclosed'>
          <TabList>
            {forkDetails.map(
              fork => (<FormattedGitTab gistDetails={fork.node} key={fork.node.id} />)
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
