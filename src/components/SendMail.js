import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'
import './SendMail.css'
import {db} from '../firebase'
import firebase from 'firebase'
import CustomizedSnackbar from '../Snackbar';

function SendMail() {
    const {register,handleSubmit,watch,errors} = useForm()
    const dispatch = useDispatch()
    const [open,setOpen] = useState(false)

    const onSubmit = (formData) => {
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setOpen(true)
        // dispatch(closeSendMessage())
    }

    return (
        <div className="sendMail">
          <CustomizedSnackbar open={open} setOpen={setOpen}/>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className="sendMail__close" onClick={() => dispatch(closeSendMessage())}/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" placeholder="To" type="email" ref={register({ required:true})}/>
                {errors.to && <p className="sendMail__error">To is required</p>}
                <input name="subject" placeholder="Subject" type="text" ref={register({ required:true})}/>
                {errors.subject && <p className="sendMail__error">Subject is required</p>}
                <input name="message" placeholder="Message" className="sendMail__message" type="text" ref={register({ required:true})}/>
                {errors.message && <p className="sendMail__error">Message is required</p>}

                <div className="sendmail__options">
                    <Button variant="container" color="primary" type="submit" className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
