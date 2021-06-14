import React, { useState, useContext } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  useToast
} from '@chakra-ui/react';

import { AppContext } from '../context/AppContext';

const QuickIntro = () => {
  const context = useContext(AppContext);
  const toast = useToast();

  const [buttonClick, setButtonClickStatus] = useState(false);

  return (
    <div className='personal-info-container'>
      <h2 className='step-title'>Step 1 of 6: A Quick Intro</h2>
      <Stack mb={10} direction='row'>
        <FormControl
          isRequired
          isInvalid={context.name === '' && buttonClick ? true : false}
        >
          <FormLabel>Enter, Apprentice! What is your name?</FormLabel>
          <Input
            placeholder='Your Name'
            onChange={context.inputChangeHandler}
            name='name'
            value={context.name}
          />
        </FormControl>

        <FormControl
          isRequired
          isInvalid={context.email === '' && buttonClick ? true : false}
        >
          <FormLabel>What is your email address?</FormLabel>
          <Input
            type='email'
            placeholder='Your email address'
            onChange={context.inputChangeHandler}
            name='email'
            value={context.email}
          />
        </FormControl>
      </Stack>

      <FormControl
        mb={10}
        isRequired
        isInvalid={context.bio === '' && buttonClick ? true : false}
      >
        <FormLabel>
          What is your profession? How do you busy yourself?{' '}
        </FormLabel>
        <Textarea
          placeholder='A short introduction'
          onChange={context.inputChangeHandler}
          name='bio'
          value={context.bio}
        />
      </FormControl>

      <FormControl
        mb={10}
        isRequired
        isInvalid={context.bio === '' && buttonClick ? true : false}
      >
        <FormLabel>How do you like to learn?</FormLabel>
        <Textarea
          placeholder='Your learning goals'
          onChange={context.inputChangeHandler}
          name='goals'
          value={context.goals}
        />
      </FormControl>

      <button
        id='next-stage-button'
        onClick={() => {
          if (context.name && context.email && context.bio && context.goals) {
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

export default QuickIntro;
