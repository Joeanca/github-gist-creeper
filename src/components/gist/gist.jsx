
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
  GridItem,
  Text,
  Card,
  CardBody,
  CardHeader,
} from '@chakra-ui/react';
import React, { memo } from 'react';
import GistFileTypes from './gist-filetypes';
import GistTabs from './gist-tabs';

const Gist = ({ gistData }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
            <Grid templateColumns='repeat(8, 1fr)'>
              <GridItem as="span" colSpan={6} textAlign='left'>name: {gistData.name}</GridItem>
              <GridItem as="span" colSpan={2} textAlign='left'>forks: {gistData.forks.totalCount}</GridItem>
            </Grid>
          </Box>

          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Card
          direction={{ base: 'column'}}
          overflow='hidden'
          variant='unstyled'
        >
          <CardHeader size='sm' padding={4}>
            <Text>Description: {gistData.description || 'N/A'}</Text>
          </CardHeader>
          <CardBody>
            <Grid templateColumns='repeat(8, 1fr)' gap={0}>
              <GridItem colSpan={2}>
                <GistFileTypes languages={gistData.files} />
              </GridItem>
              <GridItem colSpan={6}>
                <GistTabs forkDetails={gistData.forks?.edges || []} />
              </GridItem>
            </Grid>
          </CardBody>
        </Card>

      </AccordionPanel>
    </AccordionItem>
  )
}

export default memo(Gist);
