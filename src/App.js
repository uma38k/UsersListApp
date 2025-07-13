import React, {useEffect, useState} from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  GridItem,
  Box,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const api_url = 'https://dummyjson.com/users';

    useEffect (()=> {
        const fetchUsers = async () => {
            const response = await fetch(api_url);
            const data = await response.json();
            console.log(data);
            setUsers(data.users);
            setLoading(false)
        };

        fetchUsers();
    }, []);

    if (loading) {
      return <p>Loading Users...</p>;
    }

    return (
        <Box bg='red.100' maxW="960px" mx="auto" my={4} p={4} color='red.900'>
          <Box mb={4}>
            <Heading as='h2' size='lg'  mb={4}>Users List</Heading>
            {users.length === 0 ? (<p>No Users found</p>) : (
              <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                {users.map(user => (
                  <Link color='red.900' href='#'>
                    <GridItem w='100%' h='10' bg='red.200' p={2} key={user.id}>
                      <Text textAlign='center' fontWeight={500} fontSize={14}>{user.firstName}</Text>
                    </GridItem>
                  </Link>
                ))}
              </Grid>
            )}
          </Box>

          <Box mb={4} display='none'>
            <Text fontSize={32}>Search User</Text>
            <FormControl>
              <FormLabel>Enter User Id</FormLabel>
              <Input type='text' w='100%'/>
              <Button type='submit' my={4}>
                Submit
              </Button>
            </FormControl>
          </Box>

        </Box>
    )
}

export default App;
