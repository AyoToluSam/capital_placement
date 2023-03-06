import {Box, Tab} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';


const Tabs = () => {

  const [value, setValue] = useState("2")
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Box className='tabContainer'>
      <TabContext value={value} >
        <Box>
          <TabList aria-label='Tabs' onChange={handleChange} variant="fullWidth" >
            <Tab label='Program Details' value="1" />
            <Tab label='Application Form' value="2" />
            <Tab label='Workflow' value="3" />
            <Tab label='Preview' value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
        <TabPanel value="4">Panel Four</TabPanel>
      </TabContext>
    </Box>
  )
}

export default Tabs