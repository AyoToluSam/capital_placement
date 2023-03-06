import './Form.scss';
import { useState, useRef } from 'react';
import {useForm, useFormContext} from 'react-hook-form'
import { Controller } from 'react-hook-form/dist/controller';
import {AppBar, Tab, Tabs, Button, Checkbox, FormControlLabel, Typography, TextField, Stack, Box, Switch } from '@mui/material';
import {MenuOutlined, HomeOutlined, DateRangeOutlined} from '@mui/icons-material';
import {BiUpload} from 'react-icons/bi'


type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isInternalPhone: boolean;
  isHidePhone: boolean;
  nationality: string;
  isInternalNational: boolean;
  isHideNational: boolean;
  currentResidence: string;
  isInternalResidence: boolean;
  isHideResidence: boolean;
  idNumber: string;
  isInternalId: boolean;
  isHideId: boolean;
  dateOfBirth: string;
  isInternalDob: boolean;
  isHideDob: boolean;
  gender: string;
  isInternalGender: boolean;
  isHideGender: boolean;
};

const Form = () => {

  const uploadRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    uploadRef.current?.click()
  }

  const [isInternalPhone, setIsInternalPhone] = useState(false);
  const [isInternalNational, setIsInternalNational] = useState(false);
  const [isInternalResidence, setIsInternalResidence] = useState(false);
  const [isInternalId, setIsInternalId] = useState(false);
  const [isInternalDob, setIsInternalDob] = useState(false);
  const [isInternalGender, setIsInternalGender] = useState(false);
  const [isHidePhone, setIsHidePhone] = useState(false);
  const [isHideNational, setIsHideNational] = useState(false);
  const [isHideResidence, setIsHideResidence] = useState(false);
  const [isHideId, setIsHideId] = useState(false);
  const [isHideDob, setIsHideDob] = useState(false);
  const [isHideGender, setIsHideGender] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    switch (name) {
      case 'isInternalPhone':
        setIsInternalPhone(checked);
        break;
      case 'isInternalNational':
        setIsInternalNational(checked);
        break;
      case 'isInternalResidence':
        setIsInternalResidence(checked);
        break;
      case 'isInternalId':
        setIsInternalId(checked);
        break;
      case 'isInternalDob':
        setIsInternalDob(checked);
        break;
      case 'isInternalGender':
        setIsInternalGender(checked);
        break;
    }
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    switch (name) {
      case 'isHidePhone':
        setIsHidePhone(checked);
        break;
      case 'isHideNational':
        setIsHideNational(checked);
        break;
      case 'isHideResidence':
        setIsHideResidence(checked);
        break;
      case 'isHideId':
        setIsHideId(checked);
        break;
      case 'isHideDob':
        setIsHideDob(checked);
        break;
      case 'isHideGender':
        setIsHideGender(checked);
        break;
    }
  };

  return (
    <>    
      <Stack className='container' direction={'row'}>
      <Stack className='sideBar' direction={'column'} spacing={8} >
        <MenuOutlined />
        <HomeOutlined />
        <DateRangeOutlined />
      </Stack>
      <Box className='appBody' >
        <AppBar className='appBar' position='static'>
        <Tabs variant="fullWidth">
          <Tab label="Program Details" />
          <Tab label="Application Form" />
          <Tab label="Workflow" />
          <Tab label="Preview" />
        </Tabs>
        </AppBar>
        <Stack className='formGroup' direction={'column'} spacing={2} >
          <div className='upload'>
            <label htmlFor="file">Upload cover image</label>
            <div className='input'>
              <div onClick={handleUpload} className='center'>
                <BiUpload className='icon'/>
                <h4>Upload cover image</h4>
                <p>16:9 ratio is recommended. Max image size is 1mb</p>
                <input ref={uploadRef} type="file" name='file' accept='image/*' hidden/>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack className='personalInfo'>
              <legend className='title'>Personal Information</legend>

              <Stack className='stack'>
                <TextField
                  label="First Name"
                  {...register('firstName', { required: true })}
                  variant="standard"
                  InputLabelProps={{style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}}
                />
                {errors.firstName && <p>This field is required</p>}
              </Stack>

              <Stack className='stack'>
                <TextField
                  label="Last Name"
                  {...register('lastName', { required: true })}
                  variant="standard"
                  InputLabelProps={{style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}}
                />
                {errors.lastName && <p>This field is required</p>}
              </Stack>

              <Stack className='stack'>
                <TextField
                  label="Email"
                  type="email"
                  {...register('email', { required: true })}
                  variant="standard"
                  InputLabelProps={{style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}}
                />
                {errors.email && <p>This field is required</p>}
              </Stack>

              <Stack className='stack' direction={'row'}>
                <TextField
                  fullWidth
                  label="Phone (without dial code)"
                  {...register('phone', { required: !isInternalPhone,})}
                  disabled={isInternalPhone}
                  variant="standard"
                  InputLabelProps={{style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}}
                />
                {errors.phone && <p>This field is required</p>}
                <FormControlLabel
                  className='interval'
                  control={
                    <Checkbox
                      name="isInternalPhone"
                      checked={isInternalPhone}
                      onChange={handleCheckboxChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Internal</Typography>}
                />
                <FormControlLabel
                  className='hide'
                  control={
                    <Switch
                      name="isHidePhone"
                      checked={isHidePhone}
                      onChange={handleSwitchChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Hide</Typography>}
                />
              </Stack>

              <Stack className='stack' direction={'row'}>
                <TextField
                  fullWidth
                  label="Nationality"
                  {...register('nationality', {required: !isInternalNational,})}
                  disabled={isInternalNational}
                  variant="standard"
                  InputLabelProps={{style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}}
                />
                {errors.nationality && <p>This field is required</p>}
                <FormControlLabel
                  className='interval'
                  control={
                    <Checkbox
                      name="isInternalNational"
                      checked={isInternalNational}
                      onChange={handleCheckboxChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Internal</Typography>}
                />
                <FormControlLabel
                  className='hide'
                  control={
                    <Switch
                      name="isHideNational"
                      checked={isHideNational}
                      onChange={handleSwitchChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Hide</Typography>}
                />
              </Stack>

              <Stack className='stack' direction={'row'}>
                <TextField
                  fullWidth
                  label="Current Residence"
                  {...register('currentResidence', { required: !isInternalResidence,})}
                  disabled={isInternalResidence}
                  variant="standard"
                  InputLabelProps={{style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}}
                />
                {errors.currentResidence && <p>This field is required</p>}
                <FormControlLabel
                  className='interval'
                  control={
                    <Checkbox
                      name="isInternalResidence"
                      checked={isInternalResidence}
                      onChange={handleCheckboxChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Internal</Typography>}
                />
                <FormControlLabel
                  className='hide'
                  control={
                    <Switch
                      name="isHideResidence"
                      checked={isHideResidence}
                      onChange={handleSwitchChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Hide</Typography>}
                />
              </Stack>

              <Stack className='stack' direction={'row'}>
                <TextField
                  fullWidth
                  label="ID Number"
                  {...register('idNumber', { required: !isInternalId,})}
                  disabled={isInternalId}
                  variant="standard"
                  InputLabelProps={{style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}}
                />
                {errors.idNumber && <p>This field is required</p>}
                <FormControlLabel
                  className='interval'
                  control={
                    <Checkbox
                      name="isInternalId"
                      checked={isInternalId}
                      onChange={handleCheckboxChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Internal</Typography>}
                />
                <FormControlLabel
                  className='hide'
                  control={
                    <Switch
                      name="isHideId"
                      checked={isHideId}
                      onChange={handleSwitchChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Hide</Typography>}
                />
              </Stack>

              <Stack className='stack date' direction={'row'}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  {...register('dateOfBirth', { required: !isInternalDob,})}
                  disabled={isInternalDob}
                  variant="standard"
                  InputLabelProps={{style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}}
                />
                {errors.dateOfBirth && <p>This field is required</p>}
                <FormControlLabel
                  className='interval'
                  control={
                    <Checkbox
                      name="isInternalDob"
                      checked={isInternalDob}
                      onChange={handleCheckboxChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Internal</Typography>}
                />
                <FormControlLabel
                  className='hide'
                  control={
                    <Switch
                      name="isHideDob"
                      checked={isHideDob}
                      onChange={handleSwitchChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Hide</Typography>}
                />
              </Stack>

              <Stack className='stack' direction={'row'}>
                <TextField
                  fullWidth
                  label="Gender"
                  {...register('gender', { required: !isInternalGender,})}
                  disabled={isInternalGender}
                  variant="standard"
                  InputLabelProps={{style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}}
                />
                <FormControlLabel
                  className='interval'
                  control={
                    <Checkbox
                      name="isInternalGender"
                      checked={isInternalGender}
                      onChange={handleCheckboxChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Internal</Typography>}
                />
                <FormControlLabel
                  className='hide'
                  control={
                    <Switch
                      name="isHideGender"
                      checked={isHideGender}
                      onChange={handleSwitchChange}
                      color="primary"
                      size='small'
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>Hide</Typography>}
                />
              </Stack>

            </Stack>
            <Button type="submit">Submit</Button>
          </form>
        </Stack>
      </Box>
    </Stack>
    </>
  )
}


  export default Form;