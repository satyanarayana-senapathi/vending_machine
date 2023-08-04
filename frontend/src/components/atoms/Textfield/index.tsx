import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'

interface TextfiledProps{
    placeholder:string,
    row?:number,
    multiline?:boolean,
    variant?:string,
}
const Textfield = ({row,multiline,variant,placeholder,...rest}:TextfiledProps) => {
  return (
    <TextField placeholder={placeholder} {...rest} rows={row} multiline  fullWidth></TextField>
  )
}

export default Textfield
