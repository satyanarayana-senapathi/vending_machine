import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

interface TypoProps extends TypographyProps{
    variant:  'h1'| "h2" |"h3" |"h4" |"h5" | "h6" |"subtitle1" |"subtitle2" |"body1"|"body2",
    content:string
}
const Typo = ({variant,content,...rest}:TypoProps) => {
  return (
   <Typography variant={variant} {...rest}>{content}</Typography>
  )
}

export default Typo
