import { Box, Typography, Button } from '@mui/material'
import React from 'react'

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <Box sx={{ pt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position='relative' p='20px'>
            <Typography color='#ff2625' fontWeight='600' fontSize='26px' >
                Fitness Club
            </Typography>
            <Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb='23px' mt='30px' >
                Sweet, Smile <br /> and repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb={4}>
                Checkout the most effective excercises.
            </Typography>
            <Button variant='contained' color='error' href='#excercises' sx={{ backgroundColor: '#ff2625', padding: '10px'}}>
                Explore Excercises
            </Button>
            <Typography fontWeight={600} fontSize='200px' color='#ff2625' sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}}}>
                Excercis.
            </Typography>
            <img src={HeroBannerImage} alt='hero-banner' style={{position: 'absolute', top: '245px'}} className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner