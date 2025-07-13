// DetailPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    Box,
    Heading,
    Text,
  } from '@chakra-ui/react';

function DetailPage() {
  const location = useLocation();
  const data = location.state;
  console.log("data-", data);

  if (!data) {
    return <div>No data found for this page.</div>;
  }

  return (
    <Box bg='red.100' maxW="960px" mx="auto" my={4} p={4} color='red.900'>
        <Box mb={4}>
        <Heading as='h2' size='lg'  mb={4}>User Detail</Heading>
            <div>
                <img src={data.image} />
                <p>ID: {data.id}</p>
                <p>Name: {data.firstName}</p>
                <p>Description: {data.lastName}</p>
            </div>
        </Box>
    </Box>
  );
}

export default DetailPage;