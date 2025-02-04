


import React from 'react'

const Cv = ({ formdata }) => {
  { formdata }
  return (
      <div className='cvv'>
        <div className='rec'><div className='first'> <h1 className='title'>{formdata.name}{formdata.surname}</h1></div> <div className='second'>{formdata.profile}</div></div>
        <div className='rec'><div className='first'>{formdata.summary}</div> <div className='second'><h1>{formdata.email}</h1><h1>{formdata.phone}</h1></div></div>
        <div className='rec'><div className='first'><h1>{formdata.work.company}</h1> <h3>{formdata.work.start}{formdata.work.end}</h3><h2>{formdata.work.position}</h2></div><div className='second'></div></div>
        <div className='rec'><div className='first'></div><div className='second'><h1>{formdata.education.degree}</h1> <h1>{formdata.education.collage}</h1><h3>{formdata.education.pass}</h3></div></div>
      </div>


  )
}

export default Cv