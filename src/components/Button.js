import React from 'react'
import './Button.css'
function Button({inp, link, text}) {
    return (
        <div className={`button ${inp === 'secondary' ? 'whitebutton' : ''}`}>
            <a href={link}>
                {text}
                </a>            
        </div>
    )
}

export default Button
