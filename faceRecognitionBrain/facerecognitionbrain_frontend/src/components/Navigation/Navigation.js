import React from 'react'

export default function Navigation({onRouteChange, isSignedIn}) {
  return (

    <div>
  { isSignedIn ? <nav style={{display:'flex', justifyContent:'flex-end'}}>
    <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
  </nav>:
   <div>
     
   <nav style={{display:'flex', justifyContent:'flex-end'}}>
  <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
  <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
</nav>
</div>
}
</div>
    
)}