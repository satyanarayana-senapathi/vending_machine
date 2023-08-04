import React from 'react'

interface ImageProps{
  src:string,
  alt:string;
  width?:string,
  height?:string,
  onClick?:()=>void;
  className?:string;
  id?:string;
}
const Images = ({src,alt,width,height,onClick,className,id}:ImageProps) => {
  return (
    <img src={src} alt={alt} height={height} width={width} onClick={onClick} id={id} className={className}/>
  )
}
export default Images
