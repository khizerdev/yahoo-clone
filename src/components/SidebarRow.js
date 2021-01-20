import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'

function SidebarRow({src ,title ,active}) {
    return (
        <div className={`sidebarRow ${active ? "active" : ""} `}>
           {src && <Avatar src={src}/>}
           <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
