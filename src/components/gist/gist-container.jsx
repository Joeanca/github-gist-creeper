import {
  Accordion,
} from '@chakra-ui/react';
import React from 'react';

import Gist from './gist';

const GistContainer = ({gists}) => {

  return (
    <Accordion defaultIndex={[0]}  allowToggle>
      <Gist />
      <Gist />  
    </Accordion>
  )
}

export default GistContainer;
