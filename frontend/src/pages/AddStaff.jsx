import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import SideBar from '../pages/SideBar'

function AddStaff() {
  return (
    <Grid container display={'flex'} flexDirection={'row'}>

      <Grid item xs={2}>
        <SideBar />
      </Grid>

      {/* Page Content Start */}
      <Grid item xs={10} marginTop={15}>
        <Grid container display={'flex'} justifyContent='center' alignItems='center'>

          <Grid item xs={12} align='center'>
            <Typography variant='h4'> Add Staff Members </Typography>
          </Grid>

          <Grid container display={'flex'} justifyContent='center' alignItems='center' spacing={2} marginTop={2}>
            <Grid item xs={5}>
              <TextField fullWidth variant='standard' name='firstName' label='First Name' value='' />
            </Grid>
            <Grid item xs={5}>
              <TextField fullWidth variant='standard' name='lastName' label='Last Name' value='' />
            </Grid>
          </Grid>

          <Grid container display={'flex'} justifyContent='center' alignItems='center' spacing={2} marginTop={2}>
            <Grid item xs={5}>
              <TextField fullWidth variant='standard' name='contact1' label='Contact 1' value='' />
            </Grid>
            <Grid item xs={5}>
              <TextField fullWidth variant='standard' name='contact2' label='Contact 2' value='' />
            </Grid>
          </Grid>

          <Grid item xs={10} marginTop={2}>
            <TextField fullWidth variant='standard' name='address' label='Address' value='' />
          </Grid>

          <Grid container display={'flex'} justifyContent='center' alignItems='center' spacing={2} marginTop={2}>
            <Grid item xs={5}>
              <TextField type='date' InputLabelProps={{shrink: true, }} fullWidth variant='standard' name='birthDay' label='BirthDay' value='' />
            </Grid>
            <Grid item xs={5}>
              <TextField fullWidth variant='standard' name='nic' label='NIC' value='' />
            </Grid>
          </Grid>

          <Grid container display={'flex'} justifyContent='center' alignItems='center' spacing={2} marginTop={2}>
            <Grid item xs={5}>
              <TextField fullWidth variant='standard' name='email' label='E-Mail' value='' />
            </Grid>
            <Grid item xs={5}>
              <TextField fullWidth variant='standard' name='password' label='Password' value='' />
            </Grid>
          </Grid>

          <Grid item xs={12} align='center' marginTop={3}>
            <Button variant='contained' color='success'> Save </Button>
          </Grid>

        </Grid>
      </Grid>
      {/* Page Content End */}
  </Grid>
  )
}

export default AddStaff