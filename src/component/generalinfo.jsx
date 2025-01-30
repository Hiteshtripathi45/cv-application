import React, { useState } from 'react'
import Input from './input'

const Generalinfo = ({formdata ,onChange}) => {

    const [display, setdisplay] = useState(true)
    

    return (
        <div>
            <div>
            <h1>General-Info</h1> <i class="fa-solid fa-angle-down" onClick={()=>setdisplay(!display)}></i>
            </div>
            {display==true?
            <div>
                <Input label='NAME' type='text' name='name'  value={formdata.name} onChange={onChange} />
                <Input label='SURNAME' type='text' name='surname'  value={formdata.surname} onChange={onChange} />
                <Input type='email' name='email' label='EMAIL' value={formdata.email} onChange={onChange} />
                <Input type='tel' name='phone' label='PHONE' value={formdata.phone} onChange={onChange} />
                <Input type='textarea' name='summary' label='SUMMARY' value={formdata.summary} onChange={onChange} />
                <Input type='file' name='img' label='PROFILE' value={formdata.img} onChange={onChange} />
            </div>
            :null}
        </div>
    )
}

export default Generalinfo