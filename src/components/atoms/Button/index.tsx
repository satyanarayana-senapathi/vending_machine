import { Button, ButtonProps } from '@mui/material'
import React from 'react'

interface MuiButtonProps extends ButtonProps{
    content:string;
    variant: "contained" | "outlined" | "text";
    color?:"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    onClick?: ()=>void;
}
const Buttons = ({content,variant,onClick,color,...rest}:MuiButtonProps) => {
  return (
      <Button variant={variant} onClick={onClick} {...rest}>{content}</Button>
  )
}

export default Buttons
