import React, { useState } from 'react'
import '../App.css'
function BoxCard({result,children}) {
    const [show,setShow]=useState(true)
   
  return (
   <div className={show?'':"hidden"} style={{width:"50%",alignSelf:"center"}}>
   
   <div className={`box ${result}`}>
      {children}
      <button onClick={()=>setShow(!show)} className="trigger">Hide</button>
    </div>
 
   </div>
  )
}

export default BoxCard
