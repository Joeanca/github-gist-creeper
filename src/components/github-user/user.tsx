import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,

} from '@chakra-ui/react';
import React from 'react';

interface GithubUserAvatarProps {
  userName: string,
  url: string,
  bio: any,
}
const GithubUserAvatar = ({ userName, url, bio }:GithubUserAvatarProps) => (
  <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src={url}
      alt={`${userName} avatar url`}
    />

    <Stack>
      <CardBody>
        <Heading size='md'>{userName}</Heading>
        <Text py='2'>
          {bio}
        </Text>
      </CardBody>
    </Stack>
  </Card>
);

export default GithubUserAvatar