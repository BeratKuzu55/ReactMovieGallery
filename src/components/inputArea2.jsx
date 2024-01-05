import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#d5d2db',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#d5d2db',
    },
    '&:hover fieldset': {
      borderColor: '#21201f',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#43e509',
      
    },
  },
});



export default function InputArea(props) {
    return (
      <Box
        sx={{
          width: 900,
          maxWidth: '100%',
          background: "#fff",
          marginLeft: "auto" , 
          marginRight: "auto",
          marginTop: "15px" ,
          marginBottom:"15px",
      
        }}
      >
        <CssTextField fullWidth label="fullWidth" id="fullWidth" 
        />
      </Box>
    );
  }
