import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import SideBar from './SideBar'

function PrescriptionView() {
  return (
    <Grid container display={'flex'} flexDirection={'row'}>

      <Grid item xs={2}>
        <SideBar />
      </Grid>

      {/* Page Content Start */}
      <Grid item xs={10} marginTop={15}>
        <Grid container display={'flex'} justifyContent='center' alignItems='center'>

          <Grid item xs={12} align='center'>
            <Typography variant='h4'> Prescription View </Typography>
          </Grid>

          <Grid container marginLeft={13} marginTop={5} gap={1}>
            <TextField name='' label='Bill Number' />
            <Button variant='contained' color='success'> OK </Button>
          </Grid>

        </Grid>
      </Grid>
      {/* Page Content End */}
  </Grid>
  )
}

export default PrescriptionView