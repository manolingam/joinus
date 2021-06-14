import React, { useState, useContext } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast
} from '@chakra-ui/react';

import { AppContext } from '../context/AppContext';

const SocialPresence = () => {
  const context = useContext(AppContext);
  const toast = useToast();

  const [buttonClick, setButtonClickStatus] = useState(false);

  return (
    <div className='project-info-container'>
      <h2 className='step-title'>Step 2 of 6: Your Social Presence</h2>

      <Stack mb={10} direction='row'>
        <FormControl
          isRequired
          isInvalid={context.discordHandle === '' && buttonClick ? true : false}
        >
          <FormLabel>What is your Discord handle?</FormLabel>
          <Input
            placeholder="Include the unique identifier after the #, no '@'"
            onChange={context.inputChangeHandler}
            name='discordHandle'
            value={context.discordHandle}
          />
        </FormControl>
        <FormControl>
          <FormLabel>What say of your Github Handle?</FormLabel>
          <Input
            placeholder="no '@"
            name='githubHandle'
            onChange={context.inputChangeHandler}
            value={context.githubHandle}
          />
        </FormControl>
      </Stack>

      <Stack mb={10} direction='row'>
        <FormControl>
          <FormLabel>And of Telegram?</FormLabel>
          <Input
            placeholder="no '@'"
            name='telegramHandle'
            onChange={context.inputChangeHandler}
            value={context.telegramHandle}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Your well flown Twitter bird?</FormLabel>
          <Input
            placeholder="no '@'"
            name='twitterHandle'
            onChange={context.inputChangeHandler}
            value={context.twitterHandle}
          />
        </FormControl>
      </Stack>

      <Stack mb={10} direction='row'>
        <FormControl
          isRequired
          isInvalid={
            context.ethereumAddress === '' && buttonClick ? true : false
          }
        >
          <FormLabel>Pray tell, what is your Ethereum address?</FormLabel>
          <Input
            placeholder='0x...'
            name='ethereumAddress'
            onChange={context.inputChangeHandler}
            value={context.ethereumAddress}
          />
        </FormControl>
        <FormControl>
          <FormLabel>At last, what is your ENS address?</FormLabel>
          <Input
            placeholder='no .eth'
            name='ensAddress'
            onChange={context.inputChangeHandler}
            value={context.ensAddress}
          />
        </FormControl>
      </Stack>

      <button
        id='next-stage-button'
        onClick={() => {
          if (context.discordHandle && context.ethereumAddress) {
            setButtonClickStatus(false);
            context.updateStage('next');
          } else {
            setButtonClickStatus(true);
            toast({
              title: 'Please fill in all the required fields.',
              status: 'warning',
              duration: 3000,
              position: 'top'
            });
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default SocialPresence;
