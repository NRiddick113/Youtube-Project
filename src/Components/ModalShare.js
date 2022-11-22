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
  import {Link} from 'react-router-dom'
  import './ModalShare.css'
  

function ModalShare({ setOpenModal }) {
    let { id } = useParams()
 let shareUrl = `https://extraordinary-pie-c5af24.netlify.app/video/${id}`
    return (
        
            <div className='modalBackgound'>
                <div className='modalContainer'>
                    <button onClick={()=>{setOpenModal(false)} }>X</button>
                    <div className='title'> Please Share and Dont Forget to Like and Comment!</div>
                    <div className='body'>
                        <EmailShareButton url={shareUrl}>
                            <EmailIcon size={32} round={true}/>
                            </EmailShareButton>
                         <FacebookShareButton url={shareUrl}>
                         <FacebookIcon size={32} round={true}/>
                         </FacebookShareButton>
                         <TwitterShareButton url={shareUrl}>
                        <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                        <WhatsappShareButton url={shareUrl}>
                        <WhatsappIcon size={32} round={true}/>
                        </WhatsappShareButton>
                        <br></br>
                        <p>Copy Url: <Link to={shareUrl}>{shareUrl}</Link></p>
                        </div>
                    <div className='footer'>
                        <button onClick={()=>{setOpenModal(false)}}>Cancel</button>
                    </div>
                </div>
                
            </div>
        
        );
    }
    
    export default ModalShare;