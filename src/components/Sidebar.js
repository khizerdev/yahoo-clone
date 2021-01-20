import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LabelIcon from '@material-ui/icons/Label';
import ErrorIcon from '@material-ui/icons/Error';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {

    const dispatch = useDispatch()

    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <button onClick={() => dispatch(openSendMessage())}>
                Compose
            </button>

            </div>

            <div className="sidebar__middle">
            
            <SidebarRow title="Inbox" active/>
            <SidebarRow title="Unread"/>
            <SidebarRow title="Started"/>
            <SidebarRow title="Drafts"/>
            <SidebarRow title="Sent"/>
            <SidebarRow title="Achive"/>
            <SidebarRow title="Spam" />
            <SidebarRow title="Trash" />
            </div>

            <div className="sidebar__bottom">
                <h4>Views</h4>
                <div className="sidebarBottom__feature">
                    <InsertPhotoIcon/>
                    <p>Photos</p>
                </div>
                <div className="sidebarBottom__feature">
                    <InsertDriveFileIcon/>
                    <p>Document</p>
                </div>
                <div className="sidebarBottom__feature">
                    <FlightTakeoffIcon/>
                    <p>Travel</p>
                </div>
                <div className="sidebarBottom__feature">
                    <LabelIcon/>
                    <p>Deals</p>
                </div>
                <div className="sidebarBottom__feature">
                    <ErrorIcon/>
                    <p>Tutorials</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
