import React, { useState } from 'react'
import {
    FormControl,
    Input,
    InputLabel,
    InputAdornment,
    IconButton
} from '@mui/material'

import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

const InputField = ({ addNewItem }) => {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        const value = e.target.value
        setInput(value)
    }

    const handleInputSubmit = (e) => {
        e.preventDefault()
    }

    const handleInputMouseDown = (e) => {
        e.preventDefault()
    }

    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Input</InputLabel>
            <Input
                id="todo-input-field"
                type='text'
                label='Input'
                value={input}
                onChange={handleInputChange}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleInputSubmit}
                        onMouseDown={handleInputMouseDown}
                    >
                        <ArrowForwardSharpIcon />
                    </IconButton>                  
                </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default InputField