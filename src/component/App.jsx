import Generalinfo from "./generalinfo"
import Cv from "./cv"
import { useState } from "react"
function App() {
const [formdata ,setformdata] = useState({ name: "", email: "", phone: "", summary:"" ,img:""})

function changedata(e){
    setformdata({...formdata, [e.target.name]:e.target.value})
}

  return (
    <>
    <Generalinfo formdata={formdata} onChange={changedata}/>
    <Cv formdata={formdata} />
    </>
  )
}

export default App
