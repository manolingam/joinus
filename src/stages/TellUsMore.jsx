import React, { useState, useContext } from 'react';
import {
  FormControl,
  FormLabel,
  Textarea,
  Stack,
  useToast
} from '@chakra-ui/react';

import { AppContext } from '../context/AppContext';

const TellUsMore = () => {
  const context = useContext(AppContext);
  const toast = useToast();

  const [buttonClick, setButtonClickStatus] = useState(false);

  return (
    <div className='additional-info-container'>
      <h2 className='step-title'>Step 4 of 6: Tell Us More</h2>
      <Stack direction='row' spacing={5}>
        <FormControl
          mb={10}
          isRequired
          isInvalid={context.passion === '' && buttonClick ? true : false}
        >
          <FormLabel>
            Now prithee, Apprentice; tell us of your passions!
          </FormLabel>
          <Textarea
            placeholder='What are you into?'
            onChange={context.inputChangeHandler}
            name='passion'
            value={context.passion}
          />
        </FormControl>

        <FormControl
          mb={10}
          isRequired
          isInvalid={context.favoriteMedia === '' && buttonClick ? true : false}
        >
          <FormLabel>
            How doth entertain yourself? A curious book, swift blog or
            intelligent podcast?
          </FormLabel>
          <Textarea
            placeholder='Favorite media'
            onChange={context.inputChangeHandler}
            name='favoriteMedia'
            value={context.favoriteMedia}
          />
        </FormControl>
      </Stack>

      <Stack direction='row' spacing={5}>
        <FormControl
          mb={10}
          isRequired
          isInvalid={context.thrills === '' && buttonClick ? true : false}
        >
          <FormLabel>
            Of the unnumber'd idle pebbles, what of Crypto thrills you most?{' '}
          </FormLabel>
          <Textarea
            placeholder='Tell us which subset of Crypto excites you most'
            onChange={context.inputChangeHandler}
            name='thrills'
            value={context.thrills}
          />
        </FormControl>
        <FormControl
          mb={10}
          isRequired
          isInvalid={context.interest === '' && buttonClick ? true : false}
        >
          <FormLabel>
            State your interest, Apprentice, in joining the Guild.
          </FormLabel>
          <Textarea
            placeholder="Let us be well inform'd of your intentions"
            onChange={context.inputChangeHandler}
            name='interest'
            value={context.interest}
          />
        </FormControl>
      </Stack>

      <button
        id='next-stage-button'
        onClick={() => {
          if (
            context.passion !== '' &&
            context.favoriteMedia !== '' &&
            context.thrills !== '' &&
            context.interest !== ''
          ) {
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

export default TellUsMore;
