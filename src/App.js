import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DataTable from './DataTable';
import Footer from './Footer';
import Button from '@material-ui/core/Button';

export default function App() {
  return (
    <Container maxWidth="sm">
      <DataTable>
    </DataTable>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <Button variant="contained" color="primary">
      Example Button
    </Button>
      <Footer name='Zenahr Barzani' />
      </Box>
    </Container>
  );
}
