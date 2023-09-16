import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SideBar from '../pages/SideBar'

const drugLsit =[
  { id: 1, name: "Acetaminophen" },
  { id: 2, name: "Ibuprofen" },
  { id: 3, name: "Aspirin" },
  { id: 4, name: "Amoxicillin" },
  { id: 5, name: "Ciprofloxacin" },
  { id: 6, name: "Fluoxetine" },
  { id: 7, name: "Sertraline" },
  { id: 8, name: "Lisinopril" },
  { id: 9, name: "Losartan" },
  { id: 10, name: "Metformin" },
  { id: 11, name: "Lansoprazole" },
  { id: 12, name: "Omeprazole" },
  { id: 13, name: "Atorvastatin" },
  { id: 14, name: "Simvastatin" },
  { id: 15, name: "Furosemide" },
  { id: 16, name: "Levothyroxine" },
  { id: 17, name: "Albuterol" },
  { id: 18, name: "Montelukast" },
  { id: 19, name: "Ranitidine" },
  { id: 20, name: "Promethazine" }
]

const producers = [
    { id: 1, name: "Pfizer" },
    { id: 2, name: "Novartis" },
    { id: 3, name: "" },
    { id: 4, name: "Merck & Co." },
    { id: 5, name: "Johnson & Johnson" },
    { id: 6, name: "Bayer" },
    { id: 7, name: "Sanofi" },
    { id: 8, name: "GlaxoSmithKline" },
    { id: 9, name: "AstraZeneca" },
    { id: 10, name: "Eli Lilly" }
]

const doses = [
    { id: 1, name: "2.5 mg" },
    { id: 2, name: "5 mg" },
    { id: 3, name: "10 mg" },
    { id: 4, name: "20 mg" },
    { id: 5, name: "25 mg" },
    { id: 6, name: "50 mg" },
    { id: 7, name: "75 mg" },
    { id: 8, name: "100 mg" },
    { id: 9, name: "125 mg" },
    { id: 10, name: "150 mg" },
    { id: 11, name: "200 mg" },
    { id: 12, name: "250 mg" },
    { id: 13, name: "300 mg" },
    { id: 14, name: "400 mg" },
    { id: 15, name: "500 mg" },
    { id: 16, name: "600 mg" },
    { id: 17, name: "800 mg" },
    { id: 18, name: "1 g" },
    { id: 19, name: "2 g" }
]

const frequencies = [
  { id: 1, name: "Exampl 1" },
  { id: 2, name: "Exampl 2" },
  { id: 3, name: "Exampl 3" },
  { id: 4, name: "Exampl 4" },
  { id: 5, name: "Exampl 5" }
]

function PrescriptionForm() {

  const [formFields, setFormFields] = useState({
    dynamicFields: [{ drug: '', company: '', dose: '', frequency: '' }],
    staticFields: { fullName: '', address: '', age: '', nic: '' }
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
    const newField = { drug: '', company: '', dose: '', frequency: '' };
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

  const handleSubmit = (e) => {
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
      <form>
        <Grid container display={'flex'} justifyContent='center' alignItems='center'>

          <Grid item xs={12} align='center'>
            <Typography variant='h4'> Create New Prescription </Typography>
          </Grid>
        
        <Grid container marginLeft={13} gap={1}>
          <TextField name='' label='Bill Number' />
          <Button variant='contained' color='success'> OK </Button>
        </Grid>

        <Grid item xs={10} display={'flex'} flexDirection={'column'} marginTop={2} gap={2}>
          <TextField fullWidth variant='standard' name='fullName' label='Full Name' onChange={handleStaticChange} value={formFields.staticFields.fullName} />
          <TextField fullWidth variant='standard' name='address' label='Address' onChange={handleStaticChange} value={formFields.staticFields.address} />
        </Grid>

        <Grid container display={'flex'} justifyContent='center' alignItems='center' spacing={2} marginTop={1}>
          <Grid item xs={5}>
            <TextField fullWidth variant='standard' name='age' label='Age' onChange={handleStaticChange} value={formFields.staticFields.age} /> 
          </Grid>
          <Grid item xs={5}>
            <TextField fullWidth variant='standard' name='nic' label='NIC' onChange={handleStaticChange} value={formFields.staticFields.nic} />
          </Grid>
        </Grid>

        {formFields.dynamicFields.map((field, index) => (
        <Grid container key={index} justifyContent='center' alignItems='center' display={'flex'} flexDirection={'row'} gap={1} marginTop={1}>
                    <Grid item>
                      <TextField
                        fullWidth
                        style={{width:'260px'}}
                        select
                        label="Drug"
                        name="drug"
                        value={field.drug}
                        onChange={(event) => handleDynamicChange(event, index)}
                      >
                        {drugLsit.map((drug)=>(
                          <MenuItem key={drug.id} value={drug.name}> {drug.name} </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        style={{width:'260px'}}
                        select
                        label="Company"
                        name="company"
                        value={field.company}
                        onChange={(event) => handleDynamicChange(event, index)}
                      >
                        {producers.map((producer)=> (
                          <MenuItem key={producer.id} value={producer.name}> {producer.name} </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        style={{width:'260px'}}
                        select
                        label="Dose"
                        name="dose"
                        value={field.dose}
                        onChange={(event) => handleDynamicChange(event, index)}
                      >
                        {doses.map((dose)=> (
                          <MenuItem key={dose.id} value={dose.name}> {dose.name} </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        style={{width:'260px'}}
                        select
                        label="Frequency"
                        name="frequency"
                        value={field.frequency}
                        onChange={(event) => handleDynamicChange(event, index)}
                      >
                        {frequencies.map((frequency) => (
                          <MenuItem key={frequency.id} value={frequency.name}> {frequency.name} </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
        ))}

        <Grid item xs={12} marginTop={3} marginLeft={13} display={'flex'} gap={1}>
          <Button variant='contained' color='primary' onClick={addField}>Add</Button>
          <Button variant='contained' color='error' onClick={() => removeField(formFields.dynamicFields.length - 1)}>Remove</Button>
        </Grid>

        <Grid item xs={12} align='center' marginTop={3}>  
          <Button variant='contained' color='success' type='submit' onClick={handleSubmit}>Submit</Button>
        </Grid>
          
        </Grid>
      </form>
    </Grid>
      {/* Page Content End */}
  </Grid>
  )
}
export default PrescriptionForm