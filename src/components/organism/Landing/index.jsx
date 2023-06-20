import React from 'react'

export default function Landing(props) {
    const {children} = props
  return (    
    <>
        <div className="rounded-lg bg-indigo-400 p-1 shadow-xl">
            <div className="w-full max-w-xs bg-white rounded-lg">
                {children}
            </div>
        </div>
    </>
  )
}
