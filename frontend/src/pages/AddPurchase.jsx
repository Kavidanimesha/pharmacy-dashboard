import { Grid, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import SideBar from '../pages/SideBar'

function AddPurchase() {

  const [formFields, setFormFields] = useState({
    dynamicFields: [{ drug: '', producer: '', dose: '', unitPrice: '', numOfBox: '', amountPerBox: '', expiryDate: '' }],
    staticFields: { refName: '', invoiceNumber: '', purchaseDate: '', supplierName: '' }
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
    const newField = { drug: '', producer: '', dose: '', unitPrice: '', numOfBox: '', amountPerBox: '', expiryDate: '' };
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
            <Typography variant='h4'> Add Purchase </Typography>
          </Grid>
          
          <form>
            <Grid container>

              <Grid container display={'flex'} justifyContent='center' alignItems='center' spacing={2} marginTop={2}>
                <Grid item xs={5}>
                  <TextField fullWidth variant='standard' onChange={handleStaticChange} name='supplierName' label='Supplier Name' value={formFields.staticFields.supplierName} />
                </Grid>
                <Grid item xs={5}>
                  <TextField fullWidth variant='standard' onChange={handleStaticChange} type='date' name='purchaseDate' label='Purchase Date' InputLabelProps={{shrink:true}} value={formFields.staticFields.purchaseDate} />
                </Grid>
              </Grid>

              <Grid container display={'flex'} justifyContent='center' alignItems='center' spacing={2} marginTop={2}>
                <Grid item xs={5}>
                  <TextField fullWidth variant='standard' onChange={handleStaticChange} name='invoiceNumber' label='Invoice Number' value={formFields.staticFields.invoiceNumber} />
                </Grid>
                <Grid item xs={5}>
                  <TextField fullWidth variant='standard' onChange={handleStaticChange} name='refName' label='Sales Ref Name' value={formFields.staticFields.refName} />
                </Grid>
              </Grid>
              
              <Grid container marginLeft={13} marginTop={3}>
                <Typography variant='h6'> Add Items: </Typography>
              </Grid>

              {formFields.dynamicFields.map ((item , index) =>(
                <Grid container key={index} justifyContent='center' alignItems='center' display={'flex'} flexDirection={'row'} gap={1} marginTop={1}>
                  <TextField style={{width:'145px'}} onChange={(event) => handleDynamicChange(event, index)} name='drug' value={item.drug} label='Drug Name' />
                  <TextField style={{width:'145px'}} onChange={(event) => handleDynamicChange(event, index)} name='producer' value={item.producer} label='Producer' />
                  <TextField style={{width:'145px'}} onChange={(event) => handleDynamicChange(event, index)} name='dose' value={item.dose} label='Dose' />
                  <TextField style={{width:'145px'}} onChange={(event) => handleDynamicChange(event, index)} type='date' InputLabelProps={{shrink:true}} name='expiryDate' value={item.expiryDate} label='Expiry Date' />
                  <TextField style={{width:'145px'}} onChange={(event) => handleDynamicChange(event, index)} name='amountPerBox' value={item.amountPerBox} label='Amount Per Box' />
                  <TextField style={{width:'145px'}} onChange={(event) => handleDynamicChange(event, index)} name='numOfBox' value={item.numOfBox} label='No of Box' />
                  <TextField style={{width:'145px'}} onChange={(event) => handleDynamicChange(event, index)} name='unitPrice' value={item.unitPrice} label='Unit Price' />
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

export default AddPurchase;
