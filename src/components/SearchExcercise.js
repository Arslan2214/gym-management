import { useState, useEffect } from "react"
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from "./HorizontalScrollbar"

const SearchExcercise = () => {
    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])
    const [bodyParts, setBodyParts] = useState([])


    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

            setBodyParts(bodyPartsData)
        }

        fetchExercisesData()
    
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/back', exerciseOptions)

            const searchedExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search.toLowerCase())
                    || exercise.target.toLowerCase().includes(search.toLowerCase())
                    || exercise.equipment.toLowerCase().includes(search.toLowerCase())
                    || exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
            )

            setSearch('')
            setExercises(searchedExercises)
        }
    }

    return (
        <Stack alignItems='center' mt='37px' justifyContent='center' p='20px' >
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='50px' textAlign='center'>
                Awesome excercises you <br /> should know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    height='76px'
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                    type='text'
                    fullWidth
                    placeholder='Search exercise'
                    sx={{
                        input: {
                            fontWeight: '500',
                            border: 'none',
                            borderRadius: '2px'
                        },
                        width: { lg: '1170px', xs: '350px' },
                        backgroundColor: '#fff',
                        boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.15)',
                        borderRadius: '4px',
                    }}
                />
                <Button className="search-btn"
                    onClick={handleSearch}
                    sx={{
                        bgcolor: '#ff2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '170px', xs: '80px' },
                        fontSize: { lg: '16px', xs: '12px' },
                        height: '80%',
                        position: 'absolute',
                        top: '10%',
                        right: '10px',
                        boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
                        borderRadius: '2px',
                    }}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
                <HorizontalScrollbar data={bodyParts}  />

            </Box>
        </Stack>
    )
}

export default SearchExcercise