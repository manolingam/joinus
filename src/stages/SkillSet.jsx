import React, { useState, useContext } from 'react';
import {
  FormControl,
  FormLabel,
  Stack,
  Checkbox,
  CheckboxGroup,
  useToast
} from '@chakra-ui/react';

import { AppContext } from '../context/AppContext';

import RadioBox from '../components/RadioBox';

const skills = [
  'Frontend Dev',
  'Backend Dev',
  'Solidity',
  'BizDev',
  'Community',
  'Project Management',
  'Finance,',
  'Product Design',
  'UX Research',
  'Game Theory',
  'DevOps',
  'Tokenomics',
  'Content',
  'Memes',
  'Visual Design',
  'UI Design',
  'Illustration',
  'Legal',
  'Accounting'
];

const SkillSet = () => {
  const context = useContext(AppContext);
  const toast = useToast();

  const [primarySkills, setPrimarySkills] = useState(
    context.primarySkills || []
  );

  const [secondarySkills, setSecondarySkills] = useState(
    context.secondarySkills || []
  );

  const [classType, setClassType] = useState(context.classType || 'Technical');

  const [buttonClick, setButtonClickStatus] = useState(false);

  return (
    <div className='required-services-container'>
      <h2 className='step-title'>Step 3 of 6: Your SkillSet</h2>

      <Stack direction='row' spacing={5}>
        <FormControl
          mb={10}
          isRequired
          isInvalid={primarySkills.length === 0 && buttonClick ? true : false}
        >
          <FormLabel mb={5}>What say'st are your primary skills?</FormLabel>
          <CheckboxGroup
            colorScheme='green'
            onChange={(e) => setPrimarySkills(e)}
            name='primarySkills'
            value={primarySkills}
          >
            <Stack direction='column' maxH='350px' overflowY='scroll'>
              {skills.map((value, index) => {
                return (
                  <Checkbox key={index} value={value} colorScheme='red'>
                    {value}
                  </Checkbox>
                );
              })}
            </Stack>
          </CheckboxGroup>
        </FormControl>

        <FormControl
          mb={10}
          isInvalid={secondarySkills.length === 0 && buttonClick ? true : false}
        >
          <FormLabel mb={5}>And your secondary skills?</FormLabel>
          <CheckboxGroup
            colorScheme='green'
            onChange={(e) => setSecondarySkills(e)}
            name='secondarySkills'
            value={secondarySkills}
          >
            <Stack direction='column' maxH='350px' overflowY='scroll'>
              {skills.map((value, index) => {
                return (
                  <Checkbox key={index} value={value} colorScheme='red'>
                    {value}
                  </Checkbox>
                );
              })}
            </Stack>
          </CheckboxGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel as='legend'>
            Do you bethink yourself as technical, or non-technical?
          </FormLabel>
          <RadioBox
            stack='vertical'
            options={['Technical', 'Non - Technical', 'Other']}
            updateRadio={setClassType}
            name='classType'
            defaultValue={context.classType || classType}
            value={context.classType || classType}
          />
        </FormControl>
      </Stack>

      <button
        id='next-stage-button'
        onClick={() => {
          if (primarySkills.length !== 0) {
            setButtonClickStatus(false);
            context.setSkillSets(primarySkills, secondarySkills, classType);
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

export default SkillSet;
