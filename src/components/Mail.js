import React from 'react'
import './Mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReplyIcon from '@material-ui/icons/Reply';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import ForwardIcon from '@material-ui/icons/Forward';
import { IconButton } from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StarIcon from '@material-ui/icons/Star';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';


function Mail() {

    const selectedMail = useSelector(selectOpenMail)

    const history = useHistory()
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <p>Back</p>
                    <IconButton>
                        <ReplyIcon/>
                    </IconButton>
                    <IconButton>
                        <ReplyAllIcon/>
                    </IconButton>
                    <IconButton>
                        <ForwardIcon/>
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    
                </div>
            </div>
                <div className="mail__body">
                    <div className="mail__bodyHeader"> 
                    <div className="headerLeft">
                        <FiberManualRecordIcon/>
                            <h2>{selectedMail?.subject}</h2> &nbsp;(<h2>{selectedMail?.title}</h2>&nbsp; )
                        </div>
                    <div className="headerRight">
                    <StarIcon/>
                    </div>
                    </div>
                    <div className="mail__message">
                            {selectedMail?.description}
                    </div>
                </div>
        </div>
    )
}

export default Mail
