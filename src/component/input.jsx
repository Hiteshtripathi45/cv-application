import React from 'react'

const Input = ({label,name,type,value,onChange,surname,img,summary}) => {
  return (
    <div>
        <label>{label}</label>
        <input type={type} name={name} value={value} surname={surname} img={img} summary={summary} onChange={onChange} /></div>
  )
}

export default Input