import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, MoreVert, Redo } from '@material-ui/icons'
import ContactMailIcon from '@material-ui/icons/ContactMail';
import TodayIcon from '@material-ui/icons/Today';
import NoteIcon from '@material-ui/icons/Note';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import EmailRow from './EmailRow';
import {db} from '../firebase'

function EmailList() {

    const [emails, setEmails] = useState([]);


    useEffect(() => {
        db.collection("emails").orderBy("timestamp" , 'desc').onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }))))
        console.log(emails)
    }, []);

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
                    {emails.map( ({id,data :{to,subject,message,timestamp}}) => (    
                      <EmailRow 
                      id={id} 
                      key={id} 
                      title={to} 
                      subject={subject} 
                      description={message} 
                      time={new Date(timestamp?.seconds * 1000).toUTCString()}
                      />
                    ))}
                    {/* <EmailRow 
                      title="Title" 
                      subject="Subject" 
                      description="Description" 
                      time="12/07/2020"
                      /> */}
                </div>
                <div className="emailSidebar">
                    
                </div>
            </div>
        </div>
    )
}

export default EmailList
