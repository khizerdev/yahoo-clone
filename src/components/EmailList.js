import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, MoreVert, Redo } from '@material-ui/icons'
import ContactMailIcon from '@material-ui/icons/ContactMail';
import TodayIcon from '@material-ui/icons/Today';
import NoteIcon from '@material-ui/icons/Note';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react'
import './EmailList.css'
import EmailRow from './EmailRow';

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingLeft">
                    <div>
                        <Checkbox/>
                        <IconButton>
                        <ArrowDropDown/>
                        </IconButton>
                    </div>
                    <div className="settingLeft__Sort">
                        <p>Sort</p>
                        <IconButton>
                        <ArrowDropDown/>
                        </IconButton>
                    </div>
                    {/* <IconButton>
                    <Redo/>
                    </IconButton>
                    <IconButton>
                    <MoreVert/>
                    </IconButton> */}
                </div>
                <div className="emailList__settingRight">
                    <IconButton>
                    <ContactMailIcon/>
                    </IconButton>
                    <IconButton>
                    <TodayIcon/>
                    </IconButton>
                    <IconButton>
                    <NoteIcon/>
                    </IconButton>
                    <IconButton>
                    <HelpIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon className="settingsIcon"/>
                        
                    </IconButton>
                </div>
            </div>    
            <div className="emailList__list">
                <div className="emailBody">
                    <div className="emailList__options__head">
                        <p>Today</p>
                    </div>
                    <EmailRow title="Faraz Akhtar" subject="Happy New Year" description="This is test " time="12:09 P.M"/>
                    <EmailRow title="Faraz Akhtar" subject="Happy New Year" description="This is test" time="12:09 P.M"/>
                </div>
                <div className="emailSidebar">
                    
                </div>
            </div>
        </div>
    )
}

export default EmailList
