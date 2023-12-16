import React, {useState} from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner';
import SearchExcercise from '../components/SearchExcercise.js';
import Excercises from '../components/Excercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcercise />
      <Excercises />
    </Box>
  )
}


export default Home;