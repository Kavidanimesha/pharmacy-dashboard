import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import SideBar from '../pages/SideBar'

function CreatePatientRecords() {
  return (
    <Grid container display={'flex'} flexDirection={'row'}>

    <Grid item xs={2}>
      <SideBar />
    </Grid>

    {/* Page Content Start */}
    <Grid item xs={10} marginTop={15}>
      <form>
        <Grid container display={'flex'} justifyContent='center' alignItems='center'>

          <Grid item xs={12} align='center'>
            <Typography variant='h4'> Create Patient Records </Typography>
          </Grid>
        
        <Grid container marginLeft={13} gap={1}>
          <TextField name='' label='Bill Number' />
          <Button variant='contained' color='success'> OK </Button>
        </Grid>

        <Grid item xs={10} display={'flex'} flexDirection={'column'} marginTop={2} gap={2}>
          <TextField fullWidth variant='standard' name='fullName' label='Full Name'  />
          <TextField fullWidth variant='standard' name='address' label='Address' />
        </Grid>

        <Grid container display={'flex'} justifyContent='center' alignItems='center' spacing={2} marginTop={1}>
          <Grid item xs={5}>
            <TextField fullWidth variant='standard' name='contact' label='Contact' />
          </Grid>
          <Grid item xs={5}>
            <TextField fullWidth variant='standard' name='nic' label='NIC' />
          </Grid>
        </Grid>

        <Grid container marginLeft={13} gap={1} marginTop={3}>
          Insert Images : 
          <input type='file' />
        </Grid>

        <Grid item xs={12} align='center' marginTop={3}>
          <Button variant='contained' color='success' type='submit'> Save </Button>
        </Grid>
          
        </Grid>
      </form>
    </Grid>
    {/* Page Content End */}
</Grid>
  )
}


export default CreatePatientRecords