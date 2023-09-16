import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SideBar from '../pages/SideBar'

function Receptionist() {

  const [formData , setFormData] = useState({
    fullName: '',
    address: '',
    age: '',
    nic: ''
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData({...formData , [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
 
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
              <Typography variant='h4'> Receptionist </Typography>
            </Grid>
          
          <Grid container marginLeft={13}>
            <TextField name='' label='Bill Number' />
          </Grid>

          <Grid item xs={10} display={'flex'} flexDirection={'column'} marginTop={2} gap={2}>
            <TextField fullWidth variant='standard' name='fullName' label='Full Name' onChange={handleChange} value={formData.fullName} />
            <TextField fullWidth variant='standard' name='address' label='Address' onChange={handleChange} value={formData.address} />
          </Grid>

          <Grid container display={'flex'} justifyContent='center' alignItems='center' spacing={2} marginTop={1}>
            <Grid item xs={5}>
              <TextField fullWidth variant='standard' name='age' label='Age' onChange={handleChange} value={formData.age} />
            </Grid>
            <Grid item xs={5}>
              <TextField fullWidth variant='standard' name='nic' label='NIC' onChange={handleChange} value={formData.nic} />
            </Grid>
          </Grid>

          <Grid item xs={12} align='center' marginTop={3}>
            <Button variant='contained' color='success' type='submit' onClick={handleSubmit}> Save </Button>
          </Grid>
            
          </Grid>
        </form>
      </Grid>
      {/* Page Content End */}
  </Grid>
  )
}

export default Receptionist