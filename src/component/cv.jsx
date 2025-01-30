


import React from 'react'

const Cv = ({formdata}) => {
  return (
    <>
    <div>{formdata.name}</div>
    <div>{formdata.email}</div>
    <div>{formdata.phone}</div>
    <div>{formdata.surname}</div>
    <div>{formdata.summary}</div>
    </>
  )
}

export default Cv