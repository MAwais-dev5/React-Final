import React, { useState } from 'react';
function Hooks (){
    const [downlight, SetDwonligth] =useState({firstName: " ", lastName: " "})
    return(
   <div >
    <input 
    type="text" value={downlight.down} 
    onChange={e => SetName({downlight: e.target.value})}/>
    
   
   </div>
    )
}
export default 
