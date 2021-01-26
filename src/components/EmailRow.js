import { Checkbox, IconButton } from '@material-ui/core'
import { StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectedMail } from '../features/mailSlice'
import './EmailRow.css'

function EmailRow({id,title,subject,description,time}) {

    const history = useHistory()
    const dispatch = useDispatch()

    const openMail = () => {
        dispatch(selectedMail({
            id,title,subject,description,time
        }))

        history.push('/mail')
    }
    
    return (
        <div onClick={openMail} className="emailRow">
            
            <div className="emailRow__options">
                <IconButton>
                    <Checkbox/>
                </IconButton>
            </div>
            <p className="emailRow__title">
                {title}
            </p>
            <IconButton>
                <StarBorderOutlined/>
            </IconButton>
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
