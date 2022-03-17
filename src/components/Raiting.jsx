import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
    return (
        <Box sx={{ '& > legend': { mt: 1 }, }} >
            <Typography component="legend">Raiting this converter</Typography>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="large" />
        </Box>
    );
}