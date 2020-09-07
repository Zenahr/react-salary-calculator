import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DataTable from './DataTable';
import Footer from './Footer';
import WorkHoursSlider from './calc/WorkHoursSlider';

export default function App() {
  return (
    <Container maxWidth="sm">
      <WorkHoursSlider/>
      <Box my={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
      <Footer name='Zenahr Barzani' />
      </Box>
    </Container>
  );
}
