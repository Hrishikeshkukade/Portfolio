import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const services = [
  { title: 'Email Marketing', description: 'Risus commodo maecenas accumsan lacus vel facilisis.' },
  { title: 'Market Analysis', description: 'Risus commodo maecenas accumsan lacus vel facilisis.' },
  { title: 'Keyword Research', description: 'Risus commodo maecenas accumsan lacus vel facilisis.' },
];

const Services = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography>{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
