import { Grid, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import SideBar from '../pages/SideBar'

function Billing() {

  const [formFields, setFormFields] = useState({
    dynamicFields: [{ drug: '',  dose: '', unitPrice: '', numOfUnits:'', frequency: '' }],
    staticFields: { fullName: '', address: '', contact: '', date: '' }
  });

  const handleDynamicChange = (event, index) => {
    const { name, value } = event.target;
    const updatedFields = [...formFields.dynamicFields];
    updatedFields[index][name] = value;
    setFormFields((prevFields) => ({
      ...prevFields,
      dynamicFields: updatedFields
    }));
  };

  const addField = () => {
    const newField = { drug: '',  dose: '', unitPrice: '', numOfUnits:'', frequency: ''};
    setFormFields((prevFields) => ({
      ...prevFields,
      dynamicFields: [...prevFields.dynamicFields, newField]
    }));
  };

  const removeField = (index) => {
    const updatedFields = [...formFields.dynamicFields];
    updatedFields.splice(index, 1);
    setFormFields((prevFields) => ({
      ...prevFields,
      dynamicFields: updatedFields
    }));
  };

  const handleStaticChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      staticFields: {
        ...prevFields.staticFields,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formFields)
  };

  return (
    <Grid container display={'flex'} flexDirection={'row'}>

      <Grid item xs={2}>
        <SideBar />
      </Grid>

      {/* Page Content Start */}
      <Grid item xs={10} marginTop={15}>
        <Grid container display={'flex'} justifyContent='center' alignItems='center'>

          <Grid item xs={12} align='center'>
            <Typography variant='h4'> Billing Interface </Typography>
          </Grid>
          
          <form>
            <Grid container>

            <Grid container marginLeft={13}>
              <TextField name='' label='Invoice Number' />
            </Grid>

              <Grid container display={'flex'} justifyContent='center' alignItems='center' spacing={2} marginTop={2}>
                <Grid item xs={5}>
                  <TextField fullWidth variant='standard' onChange={handleStaticChange} name='fullName' label='Full Name' value={formFields.staticFields.fullName} />
                </Grid>
                <Grid item xs={5}>
                <TextField fullWidth variant='standard' onChange={handleStaticChange} name='address' label='Address' value={formFields.staticFields.address} />
                </Grid>
              </Grid>

              <Grid container display={'flex'} justifyContent='center' alignItems='center' spacing={2} marginTop={2}>
                <Grid item xs={5}>
                  <TextField fullWidth variant='standard' onChange={handleStaticChange} name='contact' label='Contact' value={formFields.staticFields.contact} />
                </Grid>
                <Grid item xs={5}>
                <TextField fullWidth variant='standard' onChange={handleStaticChange} type='date' name='date' label='Bill Date' InputLabelProps={{shrink:true}} value={formFields.staticFields.date} />
                </Grid>
              </Grid>
              
              <Grid container marginLeft={13} marginTop={3}>
                <Typography variant='h6'> Items: </Typography>
              </Grid>

              {formFields.dynamicFields.map ((item , index) =>(
                <Grid container key={index} justifyContent='center' alignItems='center' display={'flex'} flexDirection={'row'} gap={1} marginTop={1}>
                  <TextField style={{width:'210px'}} onChange={(event) => handleDynamicChange(event, index)} name='drug' value={item.drug} label='Drug Name' />
                  <TextField style={{width:'210px'}} onChange={(event) => handleDynamicChange(event, index)} name='dose' value={item.dose} label='Dose' />
                  <TextField style={{width:'210px'}} onChange={(event) => handleDynamicChange(event, index)} name='frequency' value={item.frequency} label='Frequency' />
                  <TextField style={{width:'210px'}} onChange={(event) => handleDynamicChange(event, index)} name='unitPrice' value={item.unitPrice} label='Unit Price' />
                  <TextField style={{width:'210px'}} onChange={(event) => handleDynamicChange(event, index)} name='numOfUnits' value={item.numOfUnits} label='No of Units' />
              </Grid>
              ))}

              <Grid container display={'flex'} alignItems='flex-end' justifyContent='flex-end' gap={1} marginTop={1} marginRight={13}>
                <Button variant='contained' color='success' onClick={addField}> Add+ </Button>
                <Button variant='contained' color='error' onClick={() => removeField(formFields.dynamicFields.length - 1)}> Remove- </Button>
              </Grid>

              <Grid container display={'flex'} justifyContent='flex-end' alignItems='flex-end' marginTop={1} marginRight={13}>
                <Typography variant='h5'> Total : </Typography>
                <Typography variant='h5'> 125 </Typography>
              </Grid>
              
          </Grid>

          <Grid item xs={12} align='center'>
            <Button variant='contained' color='success' onClick={handleSubmit}> Save </Button>
          </Grid>
          </form>
        </Grid>
      </Grid>
      {/* Page Content End */}
  </Grid>
  )
}

export default Billing