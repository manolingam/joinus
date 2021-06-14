import React, { useState, useContext } from 'react';
import {
  FormControl,
  Stack,
  Checkbox,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react';

import { AppContext } from '../context/AppContext';

const Readiness = () => {
  const context = useContext(AppContext);

  const [handbookCheckBoxStatus, setHandBookCheckBoxStatus] = useState(false);
  const [pledgeCheckBoxStatus, setPledgeCheckBoxStatus] = useState(false);

  const [dialogStatus, setDialogStatus] = useState(false);

  const onClose = () => setDialogStatus(false);
  const cancelRef = React.useRef();

  const modalConfirmHandler = () => {
    setPledgeCheckBoxStatus(true);
    onClose();
  };

  const handbookCheckBoxChangeHandler = () => {
    setHandBookCheckBoxStatus(!handbookCheckBoxStatus);
  };

  const pledgeCheckBoxChangeHandler = () => {
    if (pledgeCheckBoxStatus) {
      setPledgeCheckBoxStatus(false);
    }
    if (!pledgeCheckBoxStatus) {
      setDialogStatus(true);
    }
  };

  return (
    <div className='additional-info-container'>
      <h2 className='step-title'>Step 6 of 6: Guild Readiness</h2>

      <Stack direction='column' spacing={5}>
        <FormControl>
          <Checkbox
            isChecked={handbookCheckBoxStatus}
            colorScheme='red'
            onChange={handbookCheckBoxChangeHandler}
          >
            Have you read through the RaidGuild Handbook?
          </Checkbox>
        </FormControl>

        <FormControl>
          <Checkbox
            isChecked={pledgeCheckBoxStatus}
            colorScheme='red'
            onChange={pledgeCheckBoxChangeHandler}
          >
            Are you ready to make pledge unto our DAO?
          </Checkbox>
        </FormControl>
      </Stack>

      <AlertDialog
        isOpen={dialogStatus}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Disclaimer
            </AlertDialogHeader>

            <AlertDialogBody>
              You must attend cohort training events and apply your skills in a
              Raid or RIP to earn a champion for your membership.
              <br />
              <br />
              Once a Guilder champions your member proposal, you must pledge 500
              wxDAI as tribute for 100 shares.
              <br />
              <br />
              If you prefer, apprentice, you may sweat your way to glory and
              tribute funds earned through raids.
            </AlertDialogBody>

            <AlertDialogFooter>
              <button
                className='dialog-button-cancel'
                ref={cancelRef}
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className='dialog-button-select'
                colorScheme='red'
                onClick={modalConfirmHandler}
                ml={3}
              >
                Continue
              </button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Button
        isLoading={context.submitting}
        loadingText='Submitting'
        id='chakra-button'
        onClick={() => {
          context.updateStage('next');
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Readiness;
