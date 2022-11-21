import React from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";
  import { useParams } from 'react-router-dom'
  import './ModalShare.css'

function ModalShare({ setOpenModal }) {
    let { id } = useParams()
 let shareUrl = `https://extraordinary-pie-c5af24.netlify.app/video/${id}`
    return (
        <div className='modalBackgound'>
            <div className='modalContainer'>
                <button onClick={()=>{console.log('click')} }>X</button>
                <div className='title'> Please Share and Dont Forget to Like and Comment!</div>
                <div className='body'>
                    <EmailIcon size={32} round={true}/>
                    <EmailShareButton 
                    />
                    <FacebookIcon size={32} round={true}/>
                    <FacebookShareButton  />
                    <TwitterIcon size={32} round={true} />
                    <TwitterShareButton />
                    <WhatsappIcon size={32} round={true}/>
                    <WhatsappShareButton />
                    <br></br>
                    <p>Copy Url: {shareUrl}</p>
                    </div>
                <div className='footer'>
                    <button onClick={()=>{setOpenModal(false)}}>Cancel</button>
                </div>
            </div>
            
        </div>
    );
}

export default ModalShare;