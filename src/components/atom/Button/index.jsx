import React from 'react'

export default function Button(props) {
    const {color = "", children, style='' ,type = 'submit', size, onClick = () => {}} = props
    return <button type={type} onClick={onClick} className={`h-15 px-6 font-semibold rounded-md ${style} ${color} ${size}`}>{children}</button>
}
