import React from 'react'
import { ScaleLoader} from 'react-spinners'

function LoadingScreen() {
  return (
    <div className='z-50 flex h-screen w-screen items-center justify-center bg-white'>
        <div className='relative flex flex-col items-center justify-center'>
            <div className='z-10 text-5xl font-bold text-purple-500 mb-5'>
                Aion
            </div>
            <ScaleLoader color="rgba(168, 85, 247, 1)" speedMultiplier={1.5} />
        </div>

    </div>
  )
}

export default LoadingScreen