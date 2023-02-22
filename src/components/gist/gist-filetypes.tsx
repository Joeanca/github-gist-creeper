import { Badge, Card, CardBody, CardHeader, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

import fileTypeColourMapping from '../../constants/github-language-colors.json';
import { File, FileLanguage } from '../../interfaces/gist';

const ColouredBadge = ({language}:{language: FileLanguage}) =>  (
  <Badge
    color={`${(fileTypeColourMapping as any)[language?.name]?.color}` || '#083fa1'}
    variant='outline'
  >{language?.name || 'N/A'}
  </Badge>
);

interface GistFileTypesProps {
  files: File[]
}
const GistFileTypes = ({ files }:GistFileTypesProps) => {
  return (
    <Card h='100%'>
      <CardHeader>
        <Heading size='md'>File Types</Heading>
      </CardHeader>
      <CardBody>
        <Stack direction='column'>
          {files.map((file,idx) => (
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
