import React, { useState } from 'react';
function Lightdown (){
    const [downlight, SetDwonligth] =useState({downlight})
    return(
   <div >
    <input 
    type="text" value={downlight.down} 
    onChange={e => SetName({downlight: e.target.value})}/>
    
   
   </div>
    )
}
export default Lightdown
