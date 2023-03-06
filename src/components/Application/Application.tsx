import './Application.scss';
import {Stack, Box, AppBar, FormControl,Tabs,Tab, TextField } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {BiUpload} from 'react-icons/bi'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import {useRef} from 'react'
// import {TabContext} from '@mui/lab';


const Application = () => {

  const uploadRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    uploadRef.current?.click()
  }

  return (
    <Stack className='container' direction={'row'}>
      <Stack className='sideBar' direction={'column'} spacing={8} >
        <MenuOutlinedIcon />
        <HomeOutlinedIcon />
        <DateRangeOutlinedIcon />
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
            <label htmlFor="file">Upload Cover Image</label>
            <div className='input'>
              <div onClick={handleUpload} className='center'>
                <BiUpload className='icon'/>
                <h4>Upload cover image</h4>
                <p>16:9 ratio is recommended. Max image size is 1mb</p>
                <input ref={uploadRef} type="file" name='file' accept='image/*' hidden/>
              </div>
            </div>
          </div>
          <FormControl>
            <TextField id="standard-basic" label="Standard" variant="standard" />
          </FormControl>
        </Stack>

      </Box>
    </Stack>
  )
}

export default Application