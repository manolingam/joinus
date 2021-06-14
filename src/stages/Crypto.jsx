import React, { useState, useContext } from 'react';
import {
  FormControl,
  FormLabel,
  Textarea,
  Stack,
  useToast,
  Input,
  Tooltip
} from '@chakra-ui/react';

import { InfoIcon } from '@chakra-ui/icons';

import RadioBox from '../components/RadioBox';

import { AppContext } from '../context/AppContext';

const Crypto = () => {
  const context = useContext(AppContext);
  const toast = useToast();

  const [daoFamiliarity, setDaoFamiliarity] = useState(
    context.daoFamiliarity || 'Expert'
  );

  const [availability, setAvailability] = useState(
    context.availability || '6-12 hours'
  );

  const [buttonClick, setButtonClickStatus] = useState(false);

  return (
    <div className='additional-info-container'>
      <h2 className='step-title'>Step 5 of 6: Your Crypto Journey</h2>
      <Stack direction='row' spacing={5} mb='2rem'>
        <FormControl isRequired>
          <FormLabel as='legend'>
            Our power is a DAO (a 'Decentralized Autonomous Organization'). Of
            this term you are familiar?
          </FormLabel>
          <RadioBox
            stack='horizontal'
            options={['Expert', 'Familiar', 'A Little', 'None']}
            updateRadio={setDaoFamiliarity}
            name='daoFamiliarity'
            defaultValue={context.daoFamiliarity || daoFamiliarity}
            value={context.daoFamiliarity || daoFamiliarity}
          />
        </FormControl>

        <FormControl
          isRequired
          isInvalid={context.cryptoExp === '' && buttonClick ? true : false}
        >
          <FormLabel>Ho, you know of Crypto yes? For how long?</FormLabel>
          <Input
            placeholder='In years'
            onChange={context.inputChangeHandler}
            name='cryptoExp'
            value={context.cryptoExp}
          />
        </FormControl>
      </Stack>

      <Stack direction='row' spacing={5}>
        <FormControl isRequired>
          <FormLabel as='legend'>
            What say you to your status, within our RaidGuild here?
            <Tooltip
              hasArrow
              placement='top'
              label="Hear, Apprentice, hear, for the time in which you're clear. Raids doft blasts and fogs, from which some time forbear. Take counsel with yourself, and come unto us well prepared."
              aria-label='disclaimer tooltip'
            >
              <InfoIcon />
            </Tooltip>
          </FormLabel>
          <RadioBox
            stack='horizontal'
            options={['0-5 hours', '6-12 hours', '13-35 hours', '36+ hours']}
            updateRadio={setAvailability}
            name='daoFamiliarity'
            defaultValue={context.availability || availability}
            value={context.availability || availability}
          />
        </FormControl>
        <FormControl mb={10}>
          <FormLabel>Any comments that still remain, Apprentice?</FormLabel>
          <Textarea
            onChange={context.inputChangeHandler}
            name='comments'
            value={context.comments}
          />
        </FormControl>
      </Stack>

      <button
        id='next-stage-button'
        onClick={() => {
          if (context.cryptoExp !== '') {
            setButtonClickStatus(false);
            context.setCryptoData(daoFamiliarity, availability);
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

export default Crypto;
