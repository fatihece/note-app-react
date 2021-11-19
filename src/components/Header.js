import React from 'react'

const Header = ({setDarkMode}) => {
    return (
        <div className="header">
            <h1>My Notes</h1>
            <button className="save"
            onClick={()=>setDarkMode((prev)=>!prev)}
            >Toggle Mode</button>
        </div>
    )
}

export default Header
