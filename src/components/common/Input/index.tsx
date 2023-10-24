import React from 'react'
import classes from './input.module.css'

const Input = (props:React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={classes['input']} {...props}/>
  )
}

export default Input