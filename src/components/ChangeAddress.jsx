import React, { useState } from 'react'

const ChangeAddress = ({setAddress, setISModalOpen}) => {
  const [newAddress, setNewAddress] = useState("");
  const changeAddress = ()=>{
    setAddress(newAddress);
    setISModalOpen(false)
  }
  return (
    <div>
        <input type="text" placeholder='Enter new address' value={newAddress} onChange={(e)=> setNewAddress(e.target.value)} className='border p-2 w-full mb-4' />
        <div className='flex justify-end'>
            <button onClick={()=>setISModalOpen(false)} className='bg-gray-500 text-white py-2 px-4 rounded mr-2'>Cancel</button>
            <button onClick={()=>changeAddress()} className='bg-blue-500 text-white py-2 px-4 rounded'>Save Address</button>
        </div>
    </div>
  )
}

export default ChangeAddress