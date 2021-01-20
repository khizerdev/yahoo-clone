import { Checkbox, IconButton } from '@material-ui/core'
import { StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './EmailRow.css'

function EmailRow({id,title,subject,description,time}) {

    const history = useHistory()
    
    return (
        <div onClick={() => history.push('/mail')} className="emailRow">
            
            <div className="emailRow__options">
                <IconButton>
                    <Checkbox/>
                </IconButton>
            </div>
            <p className="emailRow__title">
                {title}
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
            </p>
            <div className="emailRow__message">
                <h4>{subject}
                <span className="emailRow__description">{description}</span>
                </h4>
            </div>
            <div className="emailRow__time">
                {time}
            </div>
        </div>
    )
}

export default EmailRow
