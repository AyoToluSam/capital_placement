import './Page.scss';
import Tabs from './components/Tabs/Tabs';
import {Box, Stack} from '@mui/material';
import {MenuOutlined, HomeOutlined, DateRangeOutlined} from '@mui/icons-material';


const Page = () => {
  return (
    <Box className="container" >
      <Stack className='sideBar' direction={'column'} spacing={8} >
        <MenuOutlined />
        <HomeOutlined />
        <DateRangeOutlined />
      </Stack>
      <Box>
        <Tabs/>
      </Box>
    </Box>
  )
}

export default Page