import { Badge, Card, CardBody, CardHeader, Heading, Stack } from '@chakra-ui/react';
import React, { memo } from 'react';

import fileTypeColourMapping from '../../constants/github-language-colors.json';

const ColouredBadge = (files) => files.map((file,idx) => {
  return <Badge
    key={idx}
    color={`${fileTypeColourMapping[file?.language?.name]?.color}` || '#083fa1'}
    variant='outline'
  >{file?.language?.name || 'N/A'}</Badge>
}
);

const GistFileTypes = ({ languages }) => {
  return (
    <Card h='100%'>
      <CardHeader>
        <Heading size='md'>File Types</Heading>
      </CardHeader>
      <CardBody>
        <Stack direction='column'>
          {ColouredBadge(languages)}
        </Stack>
      </CardBody>
    </Card>
  )
}

export default memo(GistFileTypes);
