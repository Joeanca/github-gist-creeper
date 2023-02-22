import { Badge, Card, CardBody, CardHeader, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

import fileTypeColourMapping from '../../constants/github-language-colors.json';

const ColouredBadge = ({language}) =>  (
  <Badge
    color={`${fileTypeColourMapping[language?.name]?.color}` || '#083fa1'}
    variant='outline'
  >{language?.name || 'N/A'}
  </Badge>
);

const GistFileTypes = ({ languages }) => {
  return (
    <Card h='100%'>
      <CardHeader>
        <Heading size='md'>File Types</Heading>
      </CardHeader>
      <CardBody>
        <Stack direction='column'>
          {languages.map((file,idx) => (
            <ColouredBadge 
              language={file?.language || {}} 
              key={`${idx}-${file.language}`}
            />)
          )}
        </Stack>
      </CardBody>
    </Card>
  )
}

export default GistFileTypes;
